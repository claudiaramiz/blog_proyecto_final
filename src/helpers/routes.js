const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    bloglist: '/bloglist',
    blog: (blogId) => (blogId ? `/blog/:${blogId}` : 'blog/blogid'),
};

export default routes;