import Link from 'next/link'
import Button from '@material-ui/core/Button'

export default function FirstPost() {
	return (
		<div>
			<h1>First Post</h1>
			<h2>
				<Link href="/"><a>Back to home</a></Link>
				<Button variant="contained" color="primary">OK</Button>

			</h2>
		</div>
	)
}
