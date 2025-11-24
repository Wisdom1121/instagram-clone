import USERS from "./users";

const POSTS = [
    {
      name: USERS[0].user, // Changed from user to name
      imageUri: 'https://randomuser.me/api/portraits/women/1.jpg',
      caption: 'Had a great day at the beach! 🌞🏖️',
      likes: 154,
      profilePicture: USERS[0].uri,
      comments: [
        { user: '@john_smith', text: 'Looks like a lot of fun!' }, // Keeping user key in comments array
        { user: '@emily_clark', text: 'Wish I was there!' },
        { user: '@sophie_martin', text: 'Such a beautiful view!' },
      ],
    },
    {
      name: USERS[1].user, // Changed from user to name
      imageUri: 'https://randomuser.me/api/portraits/men/1.jpg',
      caption: 'Just finished a marathon! 🏅🏃‍♂️',
      likes: 287,
      profilePicture: USERS[1].uri,
      comments: [
        { user: '@lisa_ray', text: 'Congratulations on finishing!' },
        { user: '@chris_lee', text: 'Amazing achievement!' },
        { user: '@daniel_wang', text: 'You’re an inspiration!' },
      ],
    },
    {
      name: USERS[2].user, // Changed from user to name
      imageUri: 'https://randomuser.me/api/portraits/women/2.jpg',
      caption: 'Cooking up some delicious pasta tonight! 🍝👩‍🍳',
      likes: 98,
      profilePicture: USERS[2].uri,
      comments: [
      ],
    },
    {
      name: USERS[3].user, // Changed from user to name
      imageUri: 'https://randomuser.me/api/portraits/men/2.jpg',
      caption: 'Exploring new hiking trails! 🌲🗺️',
      likes: 176,
      profilePicture: USERS[3].uri,
      comments: [
        { user: '@jane_doe', text: 'Those trails look amazing!' },
        { user: '@john_smith', text: 'Hiking is the best!' },
        { user: '@emily_clark', text: 'Great photos, keep sharing!' },
      ],
    },
    {
      name: USERS[4].user, // Changed from user to name
      imageUri: 'https://randomuser.me/api/portraits/women/3.jpg',
      caption: 'Finally got my new book! 📚✨',
      likes: 211,
      profilePicture: USERS[4].uri, // Corrected from USERS[5] to USERS[4]
      comments: [
        { user: '@sophie_martin', text: 'Can’t wait to hear your thoughts on it!' },
        { user: '@daniel_wang', text: 'What’s the book about?' },
      ],
    },
  ];
  
export default POSTS;
