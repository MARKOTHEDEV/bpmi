import { Hero, Layout } from "@/components"
import InputWithLabel from "@/components/Input"
import Head from "next/head"




const BecomeAMember= ()=>{


    return(
        <div>
        <Head>
            <title>BPMI | Become A Member</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={""}>
        <Layout>
          <Hero img={"womenwriting"} title={"Become a member"} />
          


          <form className="max-w-sm mx-auto">

            <InputWithLabel label="Name"/>
            <InputWithLabel label="Phone"/>
            <InputWithLabel label="Email"/>
            <InputWithLabel label="Highest qualification"/>
            <InputWithLabel label="Years of proffessional experience"/>
            <InputWithLabel label="Present job title"/>
            
            <button type="submit" className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Submit</button>
          </form>


        </Layout>
      </main>


        </div>
    )
}


export default BecomeAMember