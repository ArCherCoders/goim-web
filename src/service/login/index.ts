import hyRequest from "@/service";
export function LoginRequest(userAccount: string, userPassword: string) {
    return hyRequest.post({
        url: "/user/login",
        data: {
            userAccount: userAccount,
            userPassword: userPassword
        }
    })
}