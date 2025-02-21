import Image from 'next/image'

import { getRanking } from '@/http/api'
import medalCooper from '../../../assets/medal-cooper.png'
import medalGold from '../../../assets/medal-gold.png'
import medalSilver from '../../../assets/medal-silver.png'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {/* RANKING */}
        {ranking.map((user, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={user.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> |{' '}
                {user.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {user.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={medalGold}
                  alt="melhada-de-ouro"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={medalSilver}
                  alt="melhada-de-ouro"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={medalCooper}
                  alt="melhada-de-ouro"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
