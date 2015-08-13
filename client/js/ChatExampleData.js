// Type Dictionary
/*
ThreadIdType = UUID
UserIdType = username string
MessageIdType = UUID
*/

// ThreadInfo Payload
//Actiontype.SEND_STREAM_THREADS
thread: {
  parentId: "thread1",
  participants: ['user1', 'user2'],
  threadId: "thread2",
  title: "Trip to Cali."
}

thread: {
  parentId: "thread2",
  participants: ['user2', 'user3'],
  threadId: "thread3",
  title: "Trip to Cali."
}

// Message Payload
//Actiontype.SEND_STREAM_MESSAGES
message: {
  createdAt: Date
  messageId: "message1",
  text: 'Sounds good.  Will they be serving dessert?',
  threadId: "thread2"
  userId: "user2",
}

message: {
  createdAt: Date
  messageId: "message2",
  text: 'Totally!  Meet you at the hotel bar.',
  threadId: "thread2"
  userId: "user2",
}

message: {
  createdAt: Date
  messageId: "message3",
  text: 'Hey Dave, want to get a beer after the conference?',
  threadId: "thread3"
  userId: "user3",
}

// // User Payload
// {
//   id: String,
//   name: String,
//   snoozed: {
//     messages: [ { threadId: MessageIdType, until: Date } ],
//     threads: { threadId: Date }
//   }
//   status: StatusType,
//   threads: [{
//     id: ThreadIdType,
//     lastSeenMessageId: MessageIdType,
//     pinned: Boolean
//   }],
//   users: {
//     blocked: [ UserIdType ],
//     pinned: [ UserIdType ]
//   }
// }
