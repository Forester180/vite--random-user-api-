import React from 'react'
import Cards from '../../Cards/Cards'
import Card from '../../Cards/Card/Card'
import Title from '../../UI/Title/Title'
import Subtitle from '../../UI/Subtitle/Subtitle'

function First({userData}) {
  return (
    <>
        <Cards>
        {userData.map((data) => (
            <Card key={data.id} img={data.picture.large}>
                <Title title={`${data.name.first} ${data.name.last}`}/>
                <Subtitle subtitle={`Город: ${data.location.city}`}/>
                <Subtitle subtitle={`Возраст: ${data.dob.age}`}/>
                <Subtitle subtitle={`Номер: ${data.phone}`}/>
                <Subtitle subtitle={`Почта: ${data.email}`}/>
            </Card>
        ))}    
        </Cards>
    </>
  )
}

export default First