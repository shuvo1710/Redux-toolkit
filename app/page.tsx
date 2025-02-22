"use client"
import TotalCount from "@/app/Component/TotalCount/TotalCount";
import {useDispatch, useSelector} from "react-redux";
import Counter from "@/app/Component/Counter/Counter";
import {decrement, increment} from "@/app/features/counters/counterSlice";
import Post from "@/app/Component/Post/Post";

export default function Home() {

    const counters = useSelector((state:any) => state.counters);
    const dispatch = useDispatch()
    const totalSum: number = counters.reduce((sum:any, current:any) => sum + current.value, 0);
    const handleIncrement = (counterId: number) => {
        dispatch(increment(counterId));

    }

    const handleDecrement = (counterId: number) => {
        dispatch(decrement(counterId));
    }


    return (
        <div className="container mx-auto">
            <div>Learn redux</div>
            <div className="pt-5">
                {
                    counters?.map((count: { id: number, value: number }) => {
                        return (
                            <Counter key={count.id} count={count.value}
                                     handleIncrement={() => handleIncrement(count?.id)}
                                     handleDecrement={() => handleDecrement(count?.id)}
                            />
                        )
                    })
                }
                <div className="mt-5 ">
                    <TotalCount totalCount={totalSum}/>
                </div>

                <Post/>

            </div>
        </div>
    );
}
