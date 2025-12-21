import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function RequestOutpass() {
    const { currentUser, userData } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        reason: '',
        fromTime: '',
        toTime: '',
        description: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const outpassData = {
                studentId: currentUser.uid,
                studentName: userData?.name || 'Student',
                department: userData?.department || 'Unknown',
                ...formData,
                status: 'pending-teacher', // Initial status
                teacherStatus: 'pending',
                hodStatus: 'pending',
                wardenStatus: 'pending',
                qrCode: null,
                createdAt: serverTimestamp(),
                riskScore: 0, // Placeholder for AI integration later
            };

            await addDoc(collection(db, 'outpasses'), outpassData);

            // Simulate success for now and redirect
            navigate('/student/history');
        } catch (error) {
            console.error("Error creating request:", error);
            alert("Failed to submit request: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Request Outpass</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Reason Category</label>
                    <select
                        name="reason"
                        required
                        className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.reason}
                        onChange={handleChange}
                    >
                        <option value="">Select Reason</option>
                        <option value="Medical">Medical</option>
                        <option value="Home Visit">Home Visit</option>
                        <option value="Academic">Academic/Event</option>
                        <option value="Personal">Personal/Shopping</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">From Date & Time</label>
                        <input
                            type="datetime-local"
                            name="fromTime"
                            required
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            value={formData.fromTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">To Date & Time</label>
                        <input
                            type="datetime-local"
                            name="toTime"
                            required
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            value={formData.toTime}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description / Details</label>
                    <textarea
                        name="description"
                        rows="3"
                        className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide more details about your request..."
                    ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 font-medium"
                    >
                        {loading ? 'Submitting...' : 'Submit Request'}
                    </button>
                </div>
            </form>
        </div>
    );
}
