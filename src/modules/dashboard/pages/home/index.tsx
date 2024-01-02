import { motion } from "framer-motion";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { CustomChart } from "../../../../common/components/chart";
import Typography from "../../../../common/components/typography";
import { OrderData } from "../../../../helper/constants";

const Dashboard = () => {
  const variant1 = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.2,
        stiffness: 200,
      },
    },
  };

  const variant2 = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.2,
        stiffness: 200,
      },
    },
  };

  const variant3 = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        stiffness: 200,
      },
    },
  };

  const variant4 = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        stiffness: 200,
      },
    },
  };

  const series = [
    {
      name: "Last 6 days",
      data: [900, 750, 800, 600, 850, 600, 950, 750, 700, 500, 850, 850],
    },

    {
      name: "Last week",
      data: [500, 900, 400, 800, 700, 600, 650, 550, 550, 800, 550, 500],
    },
  ];

  const lineSeries = [
    {
      name: "Last 6 days",
      data: [900, 750, 800, 600, 850, 600],
    },

    {
      name: "Last week",
      data: [500, 900, 400, 800, 700, 600],
    },
  ];

  const categories = [
    {
      title: "Afternoon",
      percentage: 40,
    },

    {
      title: "Evening",
      percentage: 32,
    },

    {
      title: "Morning",
      percentage: 28,
    },
  ];

  const valueArray = categories?.map((element) => {
    return Number(element.percentage);
  });

  const labelArray = categories?.map((element) => {
    return element.title;
  });

  return (
    <div>
      <div className="grid_container">
        <motion.div
          variants={variant1}
          animate="visible"
          initial="hidden"
          className="border-b-2 border-gray-100 border-r-2"
        >
          <div>
            <div className="pr-8 pb-8 pt-8">
              <div className="flex items-center justify-between">
                <Typography type="p" children="Revenue" />
                <div className="text-[#5A6ACF] text-xs px-4 py-2 shadow-md cursor-pointer">
                  View Report
                </div>
              </div>
              <div className="flex flex-col gap-5 my-4">
                <Typography
                  type="p"
                  children="IDR 7.852.000"
                  variant="textXl"
                  weight="medium"
                />
                <div className="flex gap-2">
                  <FaLongArrowAltUp className="text-green-600" />
                  <Typography
                    type="p"
                    children="2.1%"
                    className="text-green-600"
                  />
                  <Typography type="p" children="vs " />
                  <Typography type="p" children="last week" />
                </div>
                <Typography
                  type="p"
                  children="Sales from 1-12 Dec, 2020"
                  className="text-gray-500"
                />
              </div>

              <div>
                <CustomChart
                  id="chart"
                  type="bar"
                  colors={["#5A6ACF", "#E6E8EC"]}
                  series={series}
                  categories={[]}
                  label={[]}
                />

                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-[5px] text-gray-legend">
                    <div className="h-2 w-2 rounded-full bg-bluePrimary" />
                    <Typography
                      type="p"
                      children="Last 6 days"
                      title="Last 6 days"
                    />
                  </div>
                  <div className="flex items-center gap-[5px] text-gray-legend">
                    <div className="h-2 w-2 rounded-full bg-grey" />
                    <Typography
                      type="p"
                      children="Last week"
                      title="Last week"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={variant2}
          animate="visible"
          initial="hidden"
          className="border-b-2 border-gray-100 pl-5"
        >
          <div className="pr-8 pb-8 pt-8">
            <div className="flex items-center justify-between">
              <Typography type="p" children="Order Time" />
              <div className="text-[#5A6ACF] text-xs px-4 py-2 shadow-md cursor-pointer">
                View Report
              </div>
            </div>
            <div className="flex flex-col gap-5 my-4">
              <Typography
                type="p"
                children="From 1-6 Dec, 2020"
                className="text-gray-500"
              />
            </div>
            <div>
              <CustomChart
                id="chart"
                type="donut"
                series={valueArray}
                label={labelArray}
                colors={["#C7CEFF", "#8593ED", "#5A6ACF"]}
              />
              <div className="lg:flex items-center justify-center gap-10 text-xs mt-5">
                {categories?.map((element, index) => {
                  return (
                    <div
                      className="flex items-center gap-[5px] text-gray-legend"
                      key={index}
                    >
                      <div className="h-2 w-2 rounded-full bg-bluePrimary " />
                      <div>
                        <Typography
                          type="p"
                          children={element.title}
                          title={element.title}
                        />
                      </div>

                      <Typography
                        type="p"
                        children={`${element.percentage}%`}
                        title={element.percentage.toString()}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={variant3}
          animate="visible"
          initial="hidden"
          className="border-b-2 border-gray-100 border-r-2 mb-5"
        >
          <div className="pr-8 pb-8 flex flex-col lg:flex-row relative">
            <div className="pt-8 w-full lg:w-1/2 relative min-h-[300px] border-r-2 border-gray-100">
              <Typography type="p" children="Your Rating" />
              <Typography
                type="p"
                children="Check your rating"
                className="pt-3 text-gray-500 py-5"
              />
              <div className="flex w-[300px] h-[300px] items-center justify-center text-white relative mt-0 lg:mt-0">
                <div>
                  <div className="bg-[#6463D6] w-[100px] rounded-full flex items-center justify-center h-[100px] absolute top-10 left-0 z-100">
                    <div>
                      <Typography
                        type="p"
                        children="85%"
                        className="text-center py-1"
                      />
                      <Typography type="p" children="Hygiene" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#2FBFDE] w-[130px] rounded-full flex items-center justify-center h-[130px] absolute top-[150px] -left-[0px]">
                  <div>
                    <Typography
                      type="p"
                      children="92%"
                      className="text-center py-1"
                    />
                    <Typography type="p" children="Packaging" />
                  </div>
                </div>

                <div className="bg-[#F99C30] w-[150px]  rounded-full flex items-center justify-center h-[150px] absolute right-[55px] top-12">
                  <div>
                    <Typography
                      type="p"
                      children="85%"
                      className="text-center py-1"
                    />
                    <Typography type="p" children="Food Taste" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:w-1/2 mt-10 lg:mt-0 pl-5">
              <Typography type="p" children="Most Ordered Food" />
              <Typography
                type="p"
                children="Check our most ordered food"
                className="pt-5 text-gray-500"
              />
              <div className="flex flex-col gap-7 pt-10 lg:pt-20">
                {OrderData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b-2 border-gray-100 pb-5"
                    >
                      <div className="flex gap-2 items-center">
                        <img src={item.image} alt="image" className="w-5" />
                        <Typography type="p" children={item.name} />
                      </div>
                      <Typography type="p" children={item.amount} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={variant4}
          animate="visible"
          initial="hidden"
          className="border-b-2 border-gray-100 mb-5 pl-5"
        >
          <div className="pr-8 pb-8 pt-8">
            <div className="flex items-center justify-between">
              <Typography type="p" children="Order" />
              <div className="text-[#5A6ACF] text-xs px-4 py-2 shadow-md cursor-pointer">
                View Report
              </div>
            </div>
            <div className="flex flex-col gap-5 my-4">
              <Typography
                type="p"
                children="2.568"
                variant="textXl"
                weight="medium"
              />
              <div className="flex gap-2">
                <FaLongArrowAltDown className="text-red-600" />
                <Typography type="p" children="2.1%" className="text-red-600" />
                <Typography type="p" children="vs" className="text-gray-500" />
                <Typography
                  type="p"
                  children="last week"
                  className="text-gray-500"
                />
              </div>
              <Typography
                type="p"
                children="Sales from 1-6 Dec, 2020"
                className="text-gray-500"
              />
            </div>
            <div>
              <CustomChart
                id="line-chart"
                type="line"
                colors={["#5A6ACF", "#000"]}
                series={lineSeries}
                categories={[]}
              />
              <div className="flex items-center gap-3 text-xs mt-10">
                <div className="flex items-center gap-[5px] text-gray-legend">
                  <div className="h-2 w-2 rounded-full bg-bluePrimary" />
                  <Typography
                    type="p"
                    children="Last 6 days"
                    title="Last 6 days"
                  />
                </div>
                <div className="flex items-center gap-[5px] text-gray-legend">
                  <div className="h-2 w-2 rounded-full bg-grey" />
                  <Typography type="p" children="Last week" title="Last week" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
