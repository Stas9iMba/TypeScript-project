type User1 = {
  name: string;
  displayName: string | null;
};

function assertDisplayName(
  user: User1
): asserts user is User1 & { displayName: string } {
  if (!user.displayName) throw new Error("User does not have a display name");
}

function logUserByDisplayName(user: User1) {
  assertDisplayName(user);
  console.log(user.displayName.toLocaleUpperCase());
}
