# This repo is summary some of Mini Project using ReactJs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Developer: Huy Pham
* Notes about React Hooks:
  + useState: khi state thay đổi, components re-render lại, cập nhật DOM => hiển thị ra ngoài
  + useEffect: khi component re-render lại thì useEffect hoạt động (run).
    Chuẩn khai báo useEffect
    
        useEffect(() => {
        console.log("use effect ran");
        console.log(blogs);
        }, []);

    [] mãng rỗng này là 1 dependency: giúp useEffect ko re-render khi component thay đổi state
    
  
