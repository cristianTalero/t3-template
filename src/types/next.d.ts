import type { NextComponentType } from 'next'
import type { Session } from 'next-auth'
import type {
	AppContextType,
	AppInitialProps,
	AppPropsType,
} from 'next/dist/shared/lib/utils'
import type { NextRouter } from 'next/router'

type PageProps = { session?: Session }

declare module 'next/app' {
	type CustomAppType = NextComponentType<
		AppContextType,
		AppInitialProps<PageProps>,
		AppPropsType<NextRouter, PageProps>
	>
}

export {}
