import Button from 'common/components/Button'
import Layout from 'features/Layout'

function App() {
  const onClickFijar = () => {
    console.log('Fijar button clicked!')
  }

  const onClickBorrar = () => {
    console.log('Borrar button clicked!')
  }

  return (
    <Layout>
      <div className="relative h-1/10 w-9/10">
        <div className="absolute top-0 right-0 h-16 space-x-10">
          <Button onClick={onClickFijar}>Fijar</Button>
          <Button onClick={onClickBorrar}>Borrar</Button>
        </div>
      </div>
    </Layout>
  )
}

export default App
