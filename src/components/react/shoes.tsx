import { SHOES } from '@/src/constants/index'
import { cx } from 'react-twc'
import { useState, useDeferredValue } from 'react'

export const Shoes: React.FC = () => {
  const [bigShoeImg, setBigShoeImg] = useState<string>('./big-shoe1.png')
  const bigShoeDeferred = useDeferredValue(bigShoeImg)
  return (
    <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
      <img
        src={bigShoeDeferred}
        alt='shoe collection'
        width={580}
        height={490}
        className='object-contain relative z-10'
      />
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {SHOES.map(({ bigShoe, thumbnail }) => (
          <div
            key={crypto.randomUUID()}
            onClick={() => {
              if (bigShoeImg !== bigShoe) {
                setBigShoeImg(bigShoe)
              }
            }}
            className={cx({
              'border-2 rounded-xl cursor-pointer max-sm:flex-1': true,
              'border-coral-red': bigShoeImg === bigShoe,
              'border-transparent': bigShoeImg !== bigShoe
            })}
          >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
              <img
                src={thumbnail}
                alt='shoe collection'
                width={127}
                height={103.34}
                className='object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
