import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container">
      <h1 className='text-black'>OLÁ</h1>

      <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed laudantium ab magnam nulla, ipsum alias asperiores praesentium optio illum aspernatur quo non ut laboriosam. Rem placeat quis suscipit est?</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed laudantium ab magnam nulla, ipsum alias asperiores praesentium optio illum aspernatur quo non ut laboriosam. Rem placeat quis suscipit est?</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed laudantium ab magnam nulla, ipsum alias asperiores praesentium optio illum aspernatur quo non ut laboriosam. Rem placeat quis suscipit est?</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed laudantium ab magnam nulla, ipsum alias asperiores praesentium optio illum aspernatur quo non ut laboriosam. Rem placeat quis suscipit est?</p>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed laudantium ab magnam nulla, ipsum alias asperiores praesentium optio illum aspernatur quo non ut laboriosam. Rem placeat quis suscipit est?</p>
    </div>
  )
}
