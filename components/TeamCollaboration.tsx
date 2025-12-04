import React, { useState } from 'react';
import { Users, UserPlus, Shield, Mail, MoreVertical, Check, X, Crown, Star } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Admin' | 'Editor' | 'Viewer';
  avatar: string;
  status: 'active' | 'pending';
  lastActive: string;
}

interface ActivityLog {
  id: string;
  member: string;
  action: string;
  timestamp: string;
  platform?: string;
}

const TeamCollaboration: React.FC = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      role: 'Owner',
      avatar: 'SJ',
      status: 'active',
      lastActive: '2 min ago'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@company.com',
      role: 'Admin',
      avatar: 'MC',
      status: 'active',
      lastActive: '1 hour ago'
    },
    {
      id: '3',
      name: 'Emma Wilson',
      email: 'emma@company.com',
      role: 'Editor',
      avatar: 'EW',
      status: 'active',
      lastActive: '3 hours ago'
    },
    {
      id: '4',
      name: 'David Martinez',
      email: 'david@company.com',
      role: 'Editor',
      avatar: 'DM',
      status: 'active',
      lastActive: 'Yesterday'
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      email: 'lisa@company.com',
      role: 'Viewer',
      avatar: 'LA',
      status: 'pending',
      lastActive: 'Pending invite'
    }
  ];

  const activityLogs: ActivityLog[] = [
    { id: '1', member: 'Michael Chen', action: 'Published post to Instagram', timestamp: '10 min ago', platform: 'Instagram' },
    { id: '2', member: 'Emma Wilson', action: 'Created new campaign draft', timestamp: '45 min ago' },
    { id: '3', member: 'Sarah Johnson', action: 'Updated team permissions', timestamp: '2 hours ago' },
    { id: '4', member: 'David Martinez', action: 'Scheduled TikTok video', timestamp: '5 hours ago', platform: 'TikTok' },
    { id: '5', member: 'Michael Chen', action: 'Generated AI content', timestamp: '1 day ago' },
    { id: '6', member: 'Emma Wilson', action: 'Optimized ad campaign', timestamp: '1 day ago' }
  ];

  const roleColors = {
    Owner: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    Admin: 'bg-gradient-to-r from-viral-purple to-pink-500',
    Editor: 'bg-gradient-to-r from-viral-cyan to-blue-500',
    Viewer: 'bg-slate-600'
  };

  const roleIcons = {
    Owner: Crown,
    Admin: Shield,
    Editor: Star,
    Viewer: Users
  };

  return (
    <div className="h-full space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Team Workspace</h2>
          <p className="text-slate-400">Manage your team members, roles, and permissions</p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-xl font-semibold transition-all"
        >
          <UserPlus size={20} />
          Invite Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-viral-cyan/20 flex items-center justify-center">
              <Users className="text-viral-cyan" size={20} />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Total Members</p>
              <p className="text-white text-xl font-bold">5</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Check className="text-green-500" size={20} />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Active</p>
              <p className="text-white text-xl font-bold">4</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <Mail className="text-yellow-500" size={20} />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Pending</p>
              <p className="text-white text-xl font-bold">1</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-viral-purple/20 flex items-center justify-center">
              <Shield className="text-viral-purple" size={20} />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Admins</p>
              <p className="text-white text-xl font-bold">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Team Members</h3>
        <div className="space-y-3">
          {teamMembers.map(member => {
            const RoleIcon = roleIcons[member.role];
            return (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-all"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-full ${roleColors[member.role]} flex items-center justify-center text-white font-bold text-sm`}>
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold">{member.name}</h4>
                      {member.status === 'pending' && (
                        <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 text-xs rounded-full">
                          Pending
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <RoleIcon size={14} className="text-slate-400" />
                      <span className="text-white font-semibold text-sm">{member.role}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{member.lastActive}</p>
                  </div>
                  <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Role Permissions */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Role Permissions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 font-semibold text-sm py-3 px-4">Permission</th>
                <th className="text-center text-slate-400 font-semibold text-sm py-3 px-4">
                  <div className="flex flex-col items-center gap-1">
                    <Crown size={16} />
                    <span>Owner</span>
                  </div>
                </th>
                <th className="text-center text-slate-400 font-semibold text-sm py-3 px-4">
                  <div className="flex flex-col items-center gap-1">
                    <Shield size={16} />
                    <span>Admin</span>
                  </div>
                </th>
                <th className="text-center text-slate-400 font-semibold text-sm py-3 px-4">
                  <div className="flex flex-col items-center gap-1">
                    <Star size={16} />
                    <span>Editor</span>
                  </div>
                </th>
                <th className="text-center text-slate-400 font-semibold text-sm py-3 px-4">
                  <div className="flex flex-col items-center gap-1">
                    <Users size={16} />
                    <span>Viewer</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { permission: 'Manage billing & subscription', owner: true, admin: false, editor: false, viewer: false },
                { permission: 'Invite & remove team members', owner: true, admin: true, editor: false, viewer: false },
                { permission: 'Publish content', owner: true, admin: true, editor: true, viewer: false },
                { permission: 'Create & schedule posts', owner: true, admin: true, editor: true, viewer: false },
                { permission: 'Generate AI content', owner: true, admin: true, editor: true, viewer: false },
                { permission: 'View analytics', owner: true, admin: true, editor: true, viewer: true },
                { permission: 'Export reports', owner: true, admin: true, editor: true, viewer: false },
                { permission: 'Access API keys', owner: true, admin: true, editor: false, viewer: false }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-slate-800">
                  <td className="text-white text-sm py-4 px-4">{row.permission}</td>
                  <td className="text-center py-4 px-4">
                    {row.owner ? <Check size={18} className="text-green-500 mx-auto" /> : <X size={18} className="text-slate-600 mx-auto" />}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.admin ? <Check size={18} className="text-green-500 mx-auto" /> : <X size={18} className="text-slate-600 mx-auto" />}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.editor ? <Check size={18} className="text-green-500 mx-auto" /> : <X size={18} className="text-slate-600 mx-auto" />}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.viewer ? <Check size={18} className="text-green-500 mx-auto" /> : <X size={18} className="text-slate-600 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Log */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Team Activity</h3>
        <div className="space-y-3">
          {activityLogs.map(log => (
            <div key={log.id} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-viral-cyan to-viral-purple flex items-center justify-center text-white font-bold text-xs">
                {log.member.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">
                  <span className="font-semibold">{log.member}</span> {log.action}
                  {log.platform && (
                    <span className="ml-2 px-2 py-0.5 bg-viral-cyan/20 text-viral-cyan text-xs rounded">
                      {log.platform}
                    </span>
                  )}
                </p>
                <p className="text-slate-500 text-xs mt-1">{log.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-card rounded-2xl border border-slate-700/50 p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Invite Team Member</h3>
              <button
                onClick={() => setShowInviteModal(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-viral-cyan"
                  placeholder="colleague@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Role</label>
                <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-viral-cyan">
                  <option>Editor</option>
                  <option>Admin</option>
                  <option>Viewer</option>
                </select>
              </div>
              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-xl font-semibold transition-all"
                >
                  Send Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCollaboration;
