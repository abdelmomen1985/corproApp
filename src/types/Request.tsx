type Request = {
    id: number,
    sender_name: string,
    email: string,
    content: string,
    created_at: Date,
    response: string,
    status: number
}

export default Request;