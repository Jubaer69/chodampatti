import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();
  const allposts = useSelector((d) => d.buyer.allPosts);
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(1);
  const [when, setWhen] = useState("Day");
  const [fdate, setFdate] = useState(null);
  const array = [1, 2, 3, 4, 5];

  useEffect(() => {
    const fpost = allposts?.filter((v) => v._id === id);
    setData(fpost[0]);
    console.log(fpost[0]);
  }, []);

  function handlebooking(fc) {
    if (fdate === null) {
      alert("kindly select a date for fucking");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v4/buyer/buyerbooking`,
          {
            when,
            fdate,
            hours: total,
            totalrate: total * data.rph,
            sellerId: fc.poster._id,
            postId: fc._id,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((d) => {
          if (d.data.success) {
            alert(d.data.message);
          } else {
            alert(d.data.message);
          }
        })
        .catch((err) => alert(err));
    }
  }

  return (
    <div className="w-full h-full text-white">
      {data ? (
        <div className="w-full  mt-[75px]">
          <div className="flex items-center gap-4">
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src={data.poster.avatar}
              alt=""
            />
            <h2 className="text-[20px] font-bold italic capitalize">
              {data.poster.fullname}
            </h2>
          </div>

          <div className="w-full flex items-center mt-6 gap-16">
            <div className="w-[40%]">
              <img
                className="w-full object-cover max-h-[450px] rounded-xl"
                src={data.avatar}
                alt=""
              />
            </div>
            <div className="w-[60%] text-[24px] flex flex-col gap-3">
              <h2>
                Full Name: <span className="font-bold">{data.fullname}</span>
              </h2>
              <h2>
                Age: <span className="font-bold">{data.age}</span>
              </h2>
              <h2>
                RPH: <span className="font-bold">{data.rph} tk</span>
              </h2>
              <h2>
                Contact: <span className="font-bold">{data.pnumber}</span>
              </h2>
              <div className="flex items-center gap-4 text-[18px]">
                <input
                  onChange={(e) => setFdate(e.target.value)}
                  className="text-black"
                  type="date"
                />
                <select
                  onChange={(e) => setWhen(e.target.value)}
                  className="text-black w-[200px]"
                  name=""
                  id=""
                >
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                </select>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2>Total Hours: </h2>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setTotal((p) => (p <= 1 ? 1 : p - 1))}
                      className="w-[50px] h-[50px] rounded-full text-black font-bold bg-gradient-to-r from-[#4CA1AF] to-[#C4E0E5]"
                    >
                      -
                    </button>
                    <h2 className="w-[20px] text-center font-bold">{total}</h2>
                    <button
                      onClick={() => setTotal((p) => (p >= 12 ? 12 : p + 1))}
                      className="w-[50px] h-[50px] rounded-full text-black font-bold bg-gradient-to-r from-[#4CA1AF] to-[#C4E0E5]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <p>
                    Total ={" "}
                    <span className="font-bold">{total * data.rph}</span> tk
                  </p>
                </div>
              </div>
              <p className="text-[16px] text-cyan-200">
                Note: Call her before the order
              </p>
              <button
                onClick={() => handlebooking(data)}
                className="p-[6px_12px] w-[300px] text-[18px] font-semibold text-black rounded-md bg-gradient-to-r from-[#FBD3E9] to-[#BB377D]"
              >
                Confirm Booking
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-[24px] bg-clip-text text-transparent inline-block bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] font-semibold mt-10">Comments</h2>
            {data.comments.length > 0 ? (
              <div className="mt-5">
                {data.comments.map((e, i) => {
                  return (
                    <div key={i} className="py-3 border-b border-white/[0.5]">
                      
                        <div className="flex items-center gap-3">
                          <img
                            className="w-[32px] h-[32px] object-cover rounded-full"
                            src={e.commenter.avatar}
                            alt=""
                          />
                          <p className="capitalize">{e.commenter.fullname}</p>
                        </div>
                        
                    

                      <div className="flex pl-[44px] items-start justify-between gap-[200px] mt-2">
                        <p className="text-[18px]">{e.comment}</p>
                        <div className="flex text-[18px] items-center gap-3">
                            <p>Rating: </p>
                            <div className="flex items-center gap-2">
                          {array.map((o, i) => {
                            return (
                              <div
                                style={{
                                  clipPath:
                                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                                }}
                                // onMouseEnter={() => setnum(i + 1)}
                                className={`w-[18px] ${
                                  i + 1 <= e.rating
                                    ? "bg-yellow-300"
                                    : "bg-white/[0.5]"
                                } h-[18px]  rounded-md`}
                              ></div>
                            );
                          })}
                        </div>
                        
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              "nai"
            )}
          </div>
        </div>
      ) : (
        "null"
      )}
    </div>
  );
}

export default Booking;
