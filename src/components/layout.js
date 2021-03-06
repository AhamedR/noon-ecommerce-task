import Head from 'next/head'

export default function Layout({ children, home }) {
  return (
    <div>
        <Head>
            <title>Noon Task</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito&display=swap" rel="stylesheet"></link>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
        </Head>
        <main>{children}</main>
    </div>
  )
}
