import { Card } from 'react-bootstrap'

function Dashboard() {
    return (
        <div className="p-4 w-100">

            <h2>Dashboard</h2>
            <p className="text-muted">Resumen general del sistema</p>

            <div className="d-flex gap-3 mt-4">

                <Card style={{ width: '200px' }}>
                    <Card.Body>
                        <Card.Title className="text-muted fs-6">Usuarios</Card.Title>
                        <h2>120</h2>
                        <Card.Text className="text-secondary small">Usuarios registrados</Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '200px' }}>
                    <Card.Body>
                        <Card.Title className="text-muted fs-6">Productos</Card.Title>
                        <h2>80</h2>
                        <Card.Text className="text-secondary small">Productos disponibles</Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '200px' }}>
                    <Card.Body>
                        <Card.Title className="text-muted fs-6">Ventas</Card.Title>
                        <h2>45</h2>
                        <Card.Text className="text-secondary small">Ventas realizadas</Card.Text>
                    </Card.Body>
                </Card>

            </div>

        </div>
    )
}

export default Dashboard