import Image from 'next/image'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <Image
        src={'/artificial-intelligence.png'}
        alt="artificial intelligence bot face"
        width={250}
        height={250}
      />
      <p className='font-bold'>What do want me to do for you?!</p>
    </div>
  )
}
