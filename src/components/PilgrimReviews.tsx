import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { Star, MessageSquare, UserCheck, LogIn, LogOut, Send, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';

interface Review {
  id: string;
  userId: string;
  authorName: string;
  rating: number;
  comment: string;
  roomType: string;
  createdAt: string;
}

export const PilgrimReviews: React.FC = () => {
  const { user, login, logout } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>('');
  const [roomType, setRoomType] = useState<string>('Bhakta Niwas Standard AC');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, orderBy('createdAt', 'desc'), limit(10));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedReviews: Review[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Review, 'id'>),
        }));
        setReviews(fetchedReviews);
      },
      (error) => {
        console.error('Failed to load reviews:', error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setErrorMsg('Please sign in with Google to post a review.');
      return;
    }

    if (comment.trim().length < 5) {
      setErrorMsg('Please enter a review comment of at least 5 characters.');
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    const path = 'reviews';
    try {
      await addDoc(collection(db, path), {
        userId: user.uid,
        authorName: user.displayName || 'Pilgrim',
        rating: Number(rating),
        comment: comment.trim(),
        roomType: roomType,
        createdAt: new Date().toISOString(),
      });

      setComment('');
      setSuccessMsg('Thank you! Your pilgrim review has been published.');
    } catch (err) {
      try {
        handleFirestoreError(err, OperationType.WRITE, path);
      } catch (formattedErr) {
        setErrorMsg('Failed to post review. Please check requirements or permissions.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-100 pb-4">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-700" />
            <span>Pilgrim Reviews & Room Feedback</span>
          </h3>
          <p className="text-xs text-gray-600 mt-1">Real feedback shared by visiting devotees</p>
        </div>

        <div>
          {user ? (
            <div className="flex items-center gap-3 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 text-xs">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-gray-800">{user.displayName || user.email}</span>
              <button
                onClick={logout}
                className="text-amber-800 hover:text-amber-950 font-bold underline flex items-center gap-1 ml-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <button
              onClick={login}
              className="px-4 py-2 rounded-xl maroon-gradient-bg text-amber-100 hover:text-white text-xs font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition"
            >
              <LogIn className="w-4 h-4 text-amber-300" />
              <span>Sign In with Google to Post</span>
            </button>
          )}
        </div>
      </div>

      {/* Review Submission Form */}
      {user ? (
        <form onSubmit={handleSubmit} className="bg-amber-50/50 p-4 sm:p-5 rounded-2xl border border-amber-200 space-y-4">
          <h4 className="text-sm font-bold text-gray-900">Share Your Experience</h4>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2 border border-emerald-200">
              <UserCheck className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Room Category Stayed</label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Bhakta Niwas Standard AC">Bhakta Niwas Standard AC</option>
                <option value="Netravathi Guest House">Netravathi Guest House</option>
                <option value="Saketha Yatri Block">Saketha Yatri Block</option>
                <option value="Subsidized Family Room">Subsidized Family Room</option>
                <option value="Private Hotel / Lodge">Private Hotel / Lodge</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Rating</label>
              <div className="flex items-center gap-1 py-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 focus:outline-none"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Your Feedback & Stay Details</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share how your stay and temple visit went..."
              rows={3}
              className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition disabled:opacity-50"
          >
            <Send className="w-3.5 h-3.5 text-amber-300" />
            <span>{submitting ? 'Submitting...' : 'Post Review'}</span>
          </button>
        </form>
      ) : (
        <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80 text-center text-xs text-gray-600 space-y-2">
          <p>Sign in with your Google account to post a room review and share your pilgrim experience with others.</p>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-3 pt-2">
        {reviews.length === 0 ? (
          <p className="text-xs text-gray-500 text-center py-4">No reviews posted yet. Be the first pilgrim to leave feedback!</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="p-4 rounded-2xl bg-amber-50/30 border border-amber-100 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">{rev.authorName}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-[11px] text-amber-800 font-semibold">{rev.roomType}</div>
              <p className="text-xs text-gray-700 leading-relaxed">{rev.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
