import { Hero, Layout } from "@/components"
import InputWithLabel from "@/components/Input"
import Head from "next/head"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name:yup.string().required(),
  phone:yup.string().required(),
  email:yup.string().email().required(),
  highest_qualification:yup.string().required(),
  years_of_pro_expe:yup.string().required(),
  present_job_title:yup.string().required(),
  certifications:yup.mixed(),
})

type FormI = yup.InferType<typeof schema>
const BecomeAMember= ()=>{
  const { register, handleSubmit, } = useForm<FormI>({
    resolver: yupResolver(schema),
  });


    const onSubmit =(data:FormI)=>{
      //
    console.log({data})
    }
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
          


          <form className="max-w-sm mx-auto"
          onSubmit={handleSubmit(onSubmit)}
          >

            <InputWithLabel label="Name" register={register('name')}/>
            <InputWithLabel label="Phone" register={register('phone')}/>
            <InputWithLabel label="Email" register={register('email')}/>
            <InputWithLabel label="Highest qualification" register={register('highest_qualification')}/>
            <InputWithLabel label="Years of proffessional experience" register={register('years_of_pro_expe')}/>
            <InputWithLabel label="Present job title" register={register('present_job_title')}/>

            <InputWithLabel label="Certifications"
            multiple
            register={register('certifications')} type="file"/>
            
            <button type="submit" className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Submit</button>
          </form>


        </Layout>
      </main>


        </div>
    )
}


export default BecomeAMember