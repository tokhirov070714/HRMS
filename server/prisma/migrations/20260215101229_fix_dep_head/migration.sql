-- CreateTable
CREATE TABLE "Department_Head" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_Head_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_Head_userId_key" ON "Department_Head"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Department_Head_departmentId_key" ON "Department_Head"("departmentId");

-- AddForeignKey
ALTER TABLE "Department_Head" ADD CONSTRAINT "Department_Head_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department_Head" ADD CONSTRAINT "Department_Head_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
