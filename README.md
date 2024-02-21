# This repo is summary some of Mini Project using ReactJs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Developer: Huy Pham

-  Notes about React Hooks:

   -  useState: khi state thay đổi, components re-render lại, cập nhật DOM => hiển thị ra ngoài
   -  useEffect: khi component re-render lại thì useEffect hoạt động (run).
      Chuẩn khai báo useEffect

          useEffect(() => {
          console.log("use effect ran");
          console.log(blogs);
          }, []);

      [] mãng rỗng này là 1 dependency: giúp useEffect ko re-render khi component thay đổi state

-  useEffect chỉ render lại khi setNewName (vì đã truyền newName vào, nếu muốn render lại cho cả tác vụ handleDelete thì truyền blogs vào)
-  useEffect sẽ không render lại (chỉ render 1 lần duy nhất) nếu [ ] rỗng

-  /blog ->>> GET ->>> Fetch all blogs
-  /blogs/{id} ->>> GET ->>> Fetch a single blog
-  /blogs ->>> POST ->>> Add a new blog
-  /blogs/{id} ->>> DELETE ->>> Delete a blog
