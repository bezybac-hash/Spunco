export interface Creator {
  id: string;
  name: string;
  username: string;
  followers: number;
  avatar: string;
  category: string;
}

// Mock data for 25 creators
export const mockCreators: Creator[] = [
  { id: '1', name: 'Sophia Martinez', username: 'sophia_art', followers: 125000, avatar: 'https://i.pravatar.cc/150?img=1', category: 'Art & Design' },
  { id: '2', name: 'James Chen', username: 'jameschen', followers: 98000, avatar: 'https://i.pravatar.cc/150?img=12', category: 'Photography' },
  { id: '3', name: 'Emma Wilson', username: 'emmawilson', followers: 210000, avatar: 'https://i.pravatar.cc/150?img=5', category: 'Fashion' },
  { id: '4', name: 'Michael Brown', username: 'mikebrown', followers: 175000, avatar: 'https://i.pravatar.cc/150?img=13', category: 'Fitness' },
  { id: '5', name: 'Isabella Garcia', username: 'bella_garcia', followers: 89000, avatar: 'https://i.pravatar.cc/150?img=9', category: 'Music' },
  { id: '6', name: 'Lucas Anderson', username: 'lucas_a', followers: 156000, avatar: 'https://i.pravatar.cc/150?img=14', category: 'Gaming' },
  { id: '7', name: 'Olivia Taylor', username: 'olivia_t', followers: 243000, avatar: 'https://i.pravatar.cc/150?img=10', category: 'Lifestyle' },
  { id: '8', name: 'Ethan Davis', username: 'ethan_d', followers: 132000, avatar: 'https://i.pravatar.cc/150?img=15', category: 'Technology' },
  { id: '9', name: 'Ava Johnson', username: 'ava_j', followers: 198000, avatar: 'https://i.pravatar.cc/150?img=16', category: 'Beauty' },
  { id: '10', name: 'Noah Martinez', username: 'noah_m', followers: 167000, avatar: 'https://i.pravatar.cc/150?img=17', category: 'Travel' },
  { id: '11', name: 'Mia Thompson', username: 'mia_t', followers: 221000, avatar: 'https://i.pravatar.cc/150?img=20', category: 'Food' },
  { id: '12', name: 'Liam White', username: 'liam_w', followers: 143000, avatar: 'https://i.pravatar.cc/150?img=33', category: 'Sports' },
  { id: '13', name: 'Charlotte Harris', username: 'charlotte_h', followers: 189000, avatar: 'https://i.pravatar.cc/150?img=23', category: 'Art & Design' },
  { id: '14', name: 'Benjamin Clark', username: 'ben_clark', followers: 112000, avatar: 'https://i.pravatar.cc/150?img=51', category: 'Photography' },
  { id: '15', name: 'Amelia Lewis', username: 'amelia_l', followers: 256000, avatar: 'https://i.pravatar.cc/150?img=24', category: 'Fashion' },
  { id: '16', name: 'Alexander Lee', username: 'alex_lee', followers: 178000, avatar: 'https://i.pravatar.cc/150?img=52', category: 'Fitness' },
  { id: '17', name: 'Harper Walker', username: 'harper_w', followers: 203000, avatar: 'https://i.pravatar.cc/150?img=25', category: 'Music' },
  { id: '18', name: 'Henry Hall', username: 'henry_h', followers: 145000, avatar: 'https://i.pravatar.cc/150?img=53', category: 'Gaming' },
  { id: '19', name: 'Evelyn Allen', username: 'evelyn_a', followers: 187000, avatar: 'https://i.pravatar.cc/150?img=26', category: 'Lifestyle' },
  { id: '20', name: 'Sebastian Young', username: 'sebastian_y', followers: 134000, avatar: 'https://i.pravatar.cc/150?img=54', category: 'Technology' },
  { id: '21', name: 'Abigail King', username: 'abigail_k', followers: 219000, avatar: 'https://i.pravatar.cc/150?img=27', category: 'Beauty' },
  { id: '22', name: 'Jackson Wright', username: 'jackson_w', followers: 161000, avatar: 'https://i.pravatar.cc/150?img=55', category: 'Travel' },
  { id: '23', name: 'Emily Scott', username: 'emily_s', followers: 237000, avatar: 'https://i.pravatar.cc/150?img=28', category: 'Food' },
  { id: '24', name: 'Aiden Green', username: 'aiden_g', followers: 152000, avatar: 'https://i.pravatar.cc/150?img=56', category: 'Sports' },
  { id: '25', name: 'Sofia Adams', username: 'sofia_a', followers: 194000, avatar: 'https://i.pravatar.cc/150?img=29', category: 'Art & Design' },
];
