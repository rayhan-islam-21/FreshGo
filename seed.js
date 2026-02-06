import prisma from "./src/lib/prisma.js";

async function main() {

  // const insertUser = await prisma.user.createMany({
  //   data: [
  //     { name: "Alice", email: "alice@example.com", age: 25, isMarried: false, nationality: "USA" },
  //     { name: "Bob", email: "bob@example.com", age: 30, isMarried: true, nationality: "Canada" },
  //     { name: "Charlie", email: "charlie@example.com", age: 28, isMarried: false, nationality: "UK" },
  //     { name: "David", email: "david@example.com", age: 35, isMarried: true, nationality: "Germany" },
  //     { name: "Eve", email: "eve@example.com", age: 22, isMarried: false, nationality: "France" },
  //     { name: "Frank", email: "frank@example.com", age: 40, isMarried: true, nationality: "Spain" },
  //     { name: "Grace", email: "grace@example.com", age: 27, isMarried: false, nationality: "Italy" },
  //     { name: "Hank", email: "hank@example.com", age: 32, isMarried: true, nationality: "Netherlands" },
  //     { name: "Ivy", email: "ivy@example.com", age: 29, isMarried: false, nationality: "Sweden" },
  //     { name: "Jack", email: "jack@example.com", age: 31, isMarried: true, nationality: "Norway" },
  //   ]
  // })

  // console.log(insertUser)


const user = await prisma.user.findMany();
console.log(user);

}





main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
