import React from 'react'
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
    const [person, updatePerson] = useImmer(initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        updatePerson(person => {
            const mentor = person.mentors.find(m => m.name === prev);
            mentor.name = current;
        })
    }
    
    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        updatePerson(person => {
            person.mentors.push({ name, title })
        });
    }
 
    const handleDelete = () => {
        const name = prompt(`어떤 멘토를 삭제하시겠습니까?`);
        updatePerson(person => {
            const index = person.mentors.findIndex(m => m.name === name);
            person.mentors.splice(index, 1);
        })
    }

    return (
        <div>
            <h1>{person.name}는 {person.title}</h1>
            <p> {person.name}의 멘토는: </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    // index를 key로 쓰는 것은 react에서 추천하는 방식은 아님
                    <li key={index}> 
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <p>
                <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
                <button onClick={handleAdd}>멘토 추가 하기</button>
                <button onClick={handleDelete}>멘토 삭제 하기</button>
            </p>
        </div>
    )
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어 개발자'
        },
        {
            name: '제임스',
            title: '시니어 개발자'    
        }
    ]
}