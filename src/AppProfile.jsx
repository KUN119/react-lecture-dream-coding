import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
    return (
        <>
            <button onClick={(event) => {
                console.log(event);
                alert("버튼이 클릭됨")
            }}>버튼</button>
            <Avatar
                isNew={true}
                image="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVEJTk0JTg0JUVCJUExJTlDJUVEJTk1JTg0JUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww"
            />
            <Profile 
                isNew={true}
                image="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVEJTk0JTg0JUVCJUExJTlDJUVEJTk1JTg0JUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww"
                name="James Kim"
                title="프론트엔드 개발자"
            /> 
            <Profile 
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVEJTk0JTg0JUVCJUExJTlDJUVEJTk1JTg0JUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww"
                name="Bob yu"
                title="백엔드 개발자"
            />
            <Profile 
                image="https://images.unsplash.com/photo-1522307837370-cc113a36b784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFRCU5NCU4NCVFQiVBMSU5QyVFRCU5NSU4NCVFQyU4MiVBQyVFQyVBNyU4NHxlbnwwfHwwfHx8MA%3D%3D"
                name="Anna Young"
                title="디자이너"
            />
        </>
    );
}

export default AppProfile;
