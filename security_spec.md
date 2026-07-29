# Security Specification & Test Matrix

## Data Invariants
1. A booking inquiry must belong to the authenticated user (`userId == request.auth.uid`).
2. User profile documents under `/users/{userId}` can only be accessed and modified by the document owner (`request.auth.uid == userId`).
3. Pilgrim reviews are publicly readable, but can only be created, updated, or deleted by the authentic author (`userId == request.auth.uid`).

## The Dirty Dozen Security Payloads
1. **Unauthenticated Write**: Creating a booking inquiry without auth token -> REJECTED
2. **Identity Spoofing**: Submitting `userId` of another user in booking inquiry -> REJECTED
3. **Invalid Guest Name Size**: Submitting a name with 1 character or >100 characters -> REJECTED
4. **Invalid Rating Bound**: Submitting a review rating of 10 or -1 -> REJECTED
5. **Path ID Injection**: Using illegal characters in document ID -> REJECTED
6. **Cross-User Profile Read**: Reading another user's profile from `/users/{otherUid}` -> REJECTED
7. **Unrestricted List Query**: Listing all booking inquiries without filtering by `userId` -> REJECTED
8. **Comment Length Exhaustion**: Submitting a 50,000 character comment in review -> REJECTED
9. **Guest Count Type Poisoning**: Submitting a string for `guestCount` -> REJECTED
10. **Status Escalation**: Submitting arbitrary string for `status` -> REJECTED
11. **Unauthorized Review Modification**: Modifying another user's review -> REJECTED
12. **Unauthorized Inquiry Deletion**: Deleting another user's booking inquiry -> REJECTED
