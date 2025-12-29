import { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    doc,
    updateDoc,
    serverTimestamp,
    limit
} from 'firebase/firestore';
import { db } from '../lib/firebase';

// Helper to safely sort by createdAt descending
const sortByDateDesc = (a, b) => {
    const dateA = a.createdAt || new Date(0); // Handle pending writes (null timestamp)
    const dateB = b.createdAt || new Date(0);
    return dateB - dateA;
};

export function useStudentOutpasses(studentUid) {
    const [outpasses, setOutpasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!studentUid) {
            setLoading(false);
            return;
        }

        // Removed orderBy to avoid missing index errors
        const q = query(
            collection(db, 'outpasses'),
            where('studentUid', '==', studentUid)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate()
            }));

            // Client-side sort
            data.sort(sortByDateDesc);

            setOutpasses(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching student outpasses:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [studentUid]);

    const createRequest = async (data) => {
        await addDoc(collection(db, 'outpasses'), {
            ...data,
            studentUid,
            teacherStatus: 'pending',
            hodStatus: 'pending',
            wardenStatus: 'pending',
            finalStatus: 'pending',
            createdAt: serverTimestamp()
        });
    };

    return { outpasses, loading, createRequest };
}

export function useDepartmentRequests(department) {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!department) {
            setLoading(false);
            return;
        }

        const q = query(
            collection(db, 'outpasses'),
            where('department', '==', department),
            where('teacherStatus', '==', 'pending')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate()
            }));

            data.sort(sortByDateDesc);

            setRequests(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching teacher requests:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [department]);

    const items = requests;
    return { requests: items, loading };
}

export function useHODRequests(department) {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!department) {
            setLoading(false);
            return;
        }

        const q = query(
            collection(db, 'outpasses'),
            where('department', '==', department),
            where('teacherStatus', '==', 'approved'),
            where('hodStatus', '==', 'pending')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate()
            }));

            data.sort(sortByDateDesc);

            setRequests(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching HOD requests:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [department]);

    return { requests, loading };
}

export function useWardenRequests() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(
            collection(db, 'outpasses'),
            where('hodStatus', '==', 'approved'),
            where('wardenStatus', '==', 'pending')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate()
            }));

            data.sort(sortByDateDesc);

            setRequests(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching Warden requests:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { requests, loading };
}

export async function updateOutpassStatus(id, role, status) {
    const docRef = doc(db, 'outpasses', id);
    const updates = {};

    if (role === 'teacher') updates.teacherStatus = status;
    if (role === 'hod') updates.hodStatus = status;
    if (role === 'warden') {
        updates.wardenStatus = status;
        if (status === 'approved') updates.finalStatus = 'approved';
    }

    if (status === 'rejected') updates.finalStatus = 'rejected';

    await updateDoc(docRef, updates);
}

export function useDepartmentHistory(department, role) {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!department || !role) return;

        // Simplify query to avoid index issues
        const q = query(
            collection(db, 'outpasses'),
            where('department', '==', department)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate()
            }))
                .filter(req => {
                    if (role === 'teacher') return req.teacherStatus !== 'pending';
                    if (role === 'hod') return req.hodStatus !== 'pending' && req.teacherStatus === 'approved';
                    return true;
                });

            data.sort(sortByDateDesc);

            setHistory(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching history:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [department, role]);

    return { history, loading };
}

export function useWardenHistory() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all recent then filter
        const q = query(
            collection(db, 'outpasses'),
            limit(100)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate()
            }))
                .filter(req => req.wardenStatus && req.wardenStatus !== 'pending');

            data.sort(sortByDateDesc);

            setHistory(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching Warden history:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { history, loading };
}
