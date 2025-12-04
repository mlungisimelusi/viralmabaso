import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, Clock, Image, Video, FileText, Check } from 'lucide-react';

interface ScheduledPost {
  id: string;
  platform: string;
  content: string;
  date: Date;
  time: string;
  type: 'image' | 'video' | 'text';
  status: 'scheduled' | 'published' | 'failed';
}

const ContentCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  // Mock scheduled posts
  const [scheduledPosts] = useState<ScheduledPost[]>([
    {
      id: '1',
      platform: 'Instagram',
      content: 'Check out our new product launch! 🚀',
      date: new Date(2025, 11, 5),
      time: '10:00 AM',
      type: 'image',
      status: 'scheduled'
    },
    {
      id: '2',
      platform: 'TikTok',
      content: 'Behind the scenes of our creative process',
      date: new Date(2025, 11, 5),
      time: '2:30 PM',
      type: 'video',
      status: 'scheduled'
    },
    {
      id: '3',
      platform: 'Twitter',
      content: 'Exciting announcement coming soon! Stay tuned...',
      date: new Date(2025, 11, 6),
      time: '9:00 AM',
      type: 'text',
      status: 'scheduled'
    },
    {
      id: '4',
      platform: 'LinkedIn',
      content: 'How AI is transforming content creation',
      date: new Date(2025, 11, 7),
      time: '11:00 AM',
      type: 'image',
      status: 'scheduled'
    }
  ]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getPostsForDate = (day: number) => {
    return scheduledPosts.filter(post => {
      const postDate = post.date;
      return postDate.getDate() === day &&
             postDate.getMonth() === currentDate.getMonth() &&
             postDate.getFullYear() === currentDate.getFullYear();
    });
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const platformColors: { [key: string]: string } = {
    'Instagram': 'bg-pink-500',
    'TikTok': 'bg-black',
    'Twitter': 'bg-blue-500',
    'LinkedIn': 'bg-blue-700',
    'Facebook': 'bg-blue-600',
    'YouTube': 'bg-red-600'
  };

  return (
    <div className="h-full space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Content Calendar</h2>
          <p className="text-slate-400">Schedule and manage your multi-platform content</p>
        </div>
        <button
          onClick={() => setShowNewPostModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-xl font-semibold transition-all"
        >
          <Plus size={20} />
          Schedule Post
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-viral-cyan/20 flex items-center justify-center">
              <Calendar className="text-viral-cyan" size={20} />
            </div>
            <div>
              <p className="text-slate-400 text-xs">This Month</p>
              <p className="text-white text-xl font-bold">24 Posts</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Check className="text-green-500" size={20} />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Published</p>
              <p className="text-white text-xl font-bold">18</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-viral-purple/20 flex items-center justify-center">
              <Clock className="text-viral-purple" size={20} />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Scheduled</p>
              <p className="text-white text-xl font-bold">6</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Image className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Platforms</p>
              <p className="text-white text-xl font-bold">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={previousMonth}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Day headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-slate-400 font-semibold text-sm py-2">
              {day}
            </div>
          ))}

          {/* Empty cells for days before month starts */}
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square" />
          ))}

          {/* Calendar days */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const posts = getPostsForDate(day);
            const isToday = 
              day === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear();

            return (
              <div
                key={day}
                className={`aspect-square p-2 rounded-lg border transition-all cursor-pointer ${
                  isToday
                    ? 'border-viral-cyan bg-viral-cyan/10'
                    : posts.length > 0
                    ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-800'
                    : 'border-slate-800 hover:bg-slate-800/30'
                }`}
                onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
              >
                <div className="text-sm font-semibold text-white mb-1">{day}</div>
                <div className="space-y-1">
                  {posts.slice(0, 3).map(post => (
                    <div
                      key={post.id}
                      className={`${platformColors[post.platform] || 'bg-slate-600'} rounded px-1.5 py-0.5 text-[10px] text-white truncate`}
                    >
                      {post.platform}
                    </div>
                  ))}
                  {posts.length > 3 && (
                    <div className="text-[10px] text-slate-400 px-1">
                      +{posts.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Posts */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Upcoming Posts</h3>
        <div className="space-y-3">
          {scheduledPosts.slice(0, 5).map(post => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-all"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`w-12 h-12 ${platformColors[post.platform] || 'bg-slate-600'} rounded-lg flex items-center justify-center`}>
                  {post.type === 'image' && <Image className="text-white" size={20} />}
                  {post.type === 'video' && <Video className="text-white" size={20} />}
                  {post.type === 'text' && <FileText className="text-white" size={20} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold">{post.platform}</span>
                    <span className="text-slate-400 text-sm">
                      {post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {post.time}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm truncate">{post.content}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  post.status === 'scheduled' ? 'bg-viral-purple/20 text-viral-purple' :
                  post.status === 'published' ? 'bg-green-500/20 text-green-500' :
                  'bg-red-500/20 text-red-500'
                }`}>
                  {post.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-card rounded-2xl border border-slate-700/50 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Schedule New Post</h3>
              <button
                onClick={() => setShowNewPostModal(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Platform</label>
                <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-viral-cyan">
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>Twitter / X</option>
                  <option>LinkedIn</option>
                  <option>Facebook</option>
                  <option>YouTube</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Content</label>
                <textarea
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-viral-cyan resize-none"
                  rows={4}
                  placeholder="What's happening?"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-viral-cyan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-viral-cyan"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowNewPostModal(false)}
                  className="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowNewPostModal(false)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-xl font-semibold transition-all"
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCalendar;
