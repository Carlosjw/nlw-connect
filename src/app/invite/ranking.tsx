import Image from 'next/image'

import medalCooper from '../../assets/medal-cooper.png'
import medalGold from '../../assets/medal-gold.png'
import medalSilver from '../../assets/medal-silver.png'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {/* PRIMEIRO LUGAR */}
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | Carlos Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={medalGold}
            alt="melhada-de-ouro"
            className="absolute top-0 right-8"
          />
        </div>

        {/* SEGUNDO LUGAR */}
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Solange Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            930
          </span>

          <Image
            src={medalSilver}
            alt="melhada-de-ouro"
            className="absolute top-0 right-8"
          />
        </div>

        {/* TERCEIRO LUGAR */}
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Saymon Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            830
          </span>

          <Image
            src={medalCooper}
            alt="melhada-de-ouro"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
