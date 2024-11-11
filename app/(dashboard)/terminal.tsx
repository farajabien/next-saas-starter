'use client'

import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function Terminal() {
	const [terminalStep, setTerminalStep] = useState(0)
	const [copied, setCopied] = useState(false)

	const terminalSteps = [
		'# Get started with:',
		'git clone https://github.com/farajabien/next-saas-starter',
		'cd next-saas-starter',
		'pnpm install',
		'',
		'# Setup environment and database',
		'pnpm db:setup',
		'pnpm db:migrate',
		'pnpm db:seed',
		'',
		'# Default login:',
		'# Email: test@test.com',
		'# Password: admin123',
		'',
		'# Start the app',
		'pnpm dev',
		'',
		'# Paystack & M-Pesa Integration (Coming Soon)',
		'stripe listen --forward-to localhost:3000/api/paystack/webhook',
	]

	useEffect(() => {
		const timer = setTimeout(() => {
			setTerminalStep((prev) =>
				prev < terminalSteps.length - 1 ? prev + 1 : prev
			)
		}, 300)

		return () => clearTimeout(timer)
	}, [terminalStep])

	const copyToClipboard = () => {
		const commands = terminalSteps
			.filter((step) => !step.startsWith('#') && step.trim() !== '')
			.join('\n')
		navigator.clipboard.writeText(commands)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className='relative'>
			<div className='absolute -top-3 right-0'>
				<Badge className='bg-orange-100 text-orange-700'>
					Local Payments Coming Soon
				</Badge>
			</div>
			<div className='w-full rounded-lg shadow-lg overflow-hidden bg-gray-900 text-white font-mono text-sm'>
				<div className='p-4'>
					<div className='flex justify-between items-center mb-4'>
						<div className='flex space-x-2'>
							<div className='w-3 h-3 rounded-full bg-red-500'></div>
							<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
							<div className='w-3 h-3 rounded-full bg-green-500'></div>
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-xs text-gray-400'>
								{copied ? 'Copied!' : 'Copy commands'}
							</span>
							<button
								onClick={copyToClipboard}
								className='text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800'
								aria-label='Copy to clipboard'>
								{copied ? (
									<Check className='h-4 w-4' />
								) : (
									<Copy className='h-4 w-4' />
								)}
							</button>
						</div>
					</div>
					<div className='space-y-1'>
						{terminalSteps.map((step, index) => (
							<div
								key={index}
								className={`${
									index > terminalStep ? 'opacity-0' : 'opacity-100'
								} transition-opacity duration-300 ${
									step.startsWith('#') ? 'text-gray-500' : ''
								} ${step.includes('Coming Soon') ? 'text-orange-400' : ''}`}>
								{!step.startsWith('#') && step.trim() !== '' && (
									<span className='text-green-400'>$</span>
								)}{' '}
								{step}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
