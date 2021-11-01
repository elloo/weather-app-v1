import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// TO-DO: Highlight if clicked on
export default function WeatherCard({dayName, weatherIconUrl, dailyMax, dailyMin}){
    return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{dayName}</Card.Title>
          <Card.Subtitle>{dailyMax}°C</Card.Subtitle>
          <Card.Subtitle className='text-muted'>{dailyMin}°C</Card.Subtitle>
        </Card.Body>
        <Card.Img variant='bottom' src={weatherIconUrl} alt='Current weather condition'/>
      </Card>
    </Col>
  )
}