const permissions = [
  'create-post',
  'edit-post',
  'delete-post'
];

const roles = {
  user: [permissions[0]], // user can only create post
  editor: [permissions[0], permissions[1]], // editor can create and edit post
  admin: permissions // admin can create, edit and delete post
};
