
import { Credential } from "../model/credential.js";

const worker_Id = `worker-${Math.floor(Math.random() * 1000)}`;

export const IssueCredential = async(req :any,res:any) => {
        try {
            const {fullname,email} = req.body

            
            const exists = await Credential.findOne({email})
            if(exists){
                return res.status(200).json({
                    message:`Credential already issued by ${exists.workerId}`,
                    success:false,
                    credentials:exists
                })
            }

           

            const newCredentials = new Credential({
                fullname,
                email,
                issuedAt: Date.now(),
                workerId:worker_Id

            })

            await newCredentials.save()

            

            console.log(newCredentials,'Credentials stored')
            res.status(200).json({message:`Credentials issued by ${worker_Id}`,newCredentials,success:true})

        } catch (error) {
            res.status(500).json({message:"Internal server error.",success:false})
            console.log(error,'ERROR')
        }
    }