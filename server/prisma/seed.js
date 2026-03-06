const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    console.log('🗑️  Clearing existing data...');
    await prisma.todo.deleteMany();
    await prisma.emergencyContact.deleteMany();
    await prisma.school_Head.deleteMany();
    await prisma.user.deleteMany();
    await prisma.department.deleteMany();
    await prisma.school.deleteMany();

    // ─────────────────────────────────────────────
    // Schools
    // ─────────────────────────────────────────────
    console.log('📝 Seeding Schools...');

    const schoolOfScience = await prisma.school.create({ data: { schoolName: 'School of Science', description: 'Natural sciences', icon: '🔬' } });
    const schoolOfEngineering = await prisma.school.create({ data: { schoolName: 'School of Engineering', description: 'Engineering disciplines', icon: '⚙️' } });
    const schoolOfComputing = await prisma.school.create({ data: { schoolName: 'School of Computing', description: 'CS & data science', icon: '💻' } });
    const schoolOfBusiness = await prisma.school.create({ data: { schoolName: 'School of Business', description: 'Business & economics', icon: '📊' } });
    const schoolOfLaw = await prisma.school.create({ data: { schoolName: 'School of Law', description: 'Legal studies', icon: '⚖️' } });
    const schoolOfMedicine = await prisma.school.create({ data: { schoolName: 'School of Medicine', description: 'Medical sciences', icon: '🏥' } });
    const schoolOfHumanities = await prisma.school.create({ data: { schoolName: 'School of Humanities', description: 'Arts & humanities', icon: '📚' } });

    console.log('✅ 7 Schools created');

    // ─────────────────────────────────────────────
    // Departments
    // ─────────────────────────────────────────────
    console.log('📝 Seeding Departments...');

    // Science
    const physicsDept = await prisma.department.create({ data: { departmentName: 'Physics', schoolId: schoolOfScience.id, icon: '⚛️' } });
    const chemistryDept = await prisma.department.create({ data: { departmentName: 'Chemistry', schoolId: schoolOfScience.id, icon: '🧪' } });
    const biologyDept = await prisma.department.create({ data: { departmentName: 'Biology', schoolId: schoolOfScience.id, icon: '🧬' } });
    const mathDept = await prisma.department.create({ data: { departmentName: 'Mathematics', schoolId: schoolOfScience.id, icon: '📐' } });

    // Engineering
    const mechEngDept = await prisma.department.create({ data: { departmentName: 'Mechanical Engineering', schoolId: schoolOfEngineering.id, icon: '🔧' } });
    const civilEngDept = await prisma.department.create({ data: { departmentName: 'Civil Engineering', schoolId: schoolOfEngineering.id, icon: '🏗️' } });
    const elecEngDept = await prisma.department.create({ data: { departmentName: 'Electrical Engineering', schoolId: schoolOfEngineering.id, icon: '⚡' } });

    // Computing
    const csDept = await prisma.department.create({ data: { departmentName: 'Computer Science', schoolId: schoolOfComputing.id, icon: '🖥️' } });
    const dataSciDept = await prisma.department.create({ data: { departmentName: 'Data Science', schoolId: schoolOfComputing.id, icon: '📈' } });

    // Business
    const economicsDept = await prisma.department.create({ data: { departmentName: 'Economics', schoolId: schoolOfBusiness.id, icon: '💹' } });
    const financeDept = await prisma.department.create({ data: { departmentName: 'Finance', schoolId: schoolOfBusiness.id, icon: '💰' } });
    const hrDept = await prisma.department.create({ data: { departmentName: 'Human Resources', schoolId: schoolOfBusiness.id, icon: '🧑‍💼' } });

    // Law
    const corpLawDept = await prisma.department.create({ data: { departmentName: 'Corporate Law', schoolId: schoolOfLaw.id, icon: '📋' } });
    const intlLawDept = await prisma.department.create({ data: { departmentName: 'International Law', schoolId: schoolOfLaw.id, icon: '🌍' } });

    // Medicine
    const clinicalDept = await prisma.department.create({ data: { departmentName: 'Clinical Medicine', schoolId: schoolOfMedicine.id, icon: '🩺' } });
    const pharmacyDept = await prisma.department.create({ data: { departmentName: 'Pharmacology', schoolId: schoolOfMedicine.id, icon: '💊' } });

    // Humanities
    const historyDept = await prisma.department.create({ data: { departmentName: 'History', schoolId: schoolOfHumanities.id, icon: '🏛️' } });
    const philosophyDept = await prisma.department.create({ data: { departmentName: 'Philosophy', schoolId: schoolOfHumanities.id, icon: '🤔' } });

    console.log('✅ 18 Departments created');

    // ─────────────────────────────────────────────
    // Users
    // ─────────────────────────────────────────────
    console.log('📝 Seeding Users...');

    const hashedPassword = await bcrypt.hash('password123', 10);

    const createUser = async (data) => prisma.user.create({ data: { ...data, passwordHash: hashedPassword } });

    // ADMIN
    const admin = await createUser({
        username: 'admin',
        role: 'ADMIN',
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@university.edu',
        phoneLocal: '+1-555-0100',
        dateOfBirth: new Date('1985-03-15'),
        addressLocal: '123 University Ave',
        city: 'University City',
        country: 'USA',
        isLocal: true,
        employeeType: 'ADMINISTRATIVE_STAFF',
        administrativePosition: 'RECRUITER',
        status: 'ACTIVE',
        departmentId: hrDept.id,
        schoolId: schoolOfBusiness.id,
        baseSalary: 68000,
        bio: 'System administrator & HR lead'
    });

    // SCHOOL HEADS (role = SCHOOL_HEAD)
    const headScience = await createUser({
        username: 'head.science',
        role: 'SCHOOL_HEAD',
        firstName: 'Eleanor',
        lastName: 'Voss',
        email: 'eleanor.voss@university.edu',
        phoneLocal: '+1-555-0101',
        phoneForeign: '+49-30-123-4567',
        addressLocal: '500 Campus Drive',
        city: 'University City',
        country: 'USA',
        addressForeign: '10 Quantum Lane',
        cityForeign: 'Berlin',
        countryForeign: 'Germany',
        dateOfBirth: new Date('1972-04-18'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfScience.id,
        departmentId: physicsDept.id,
        baseSalary: 90000,
        bio: 'Theoretical physics • School Dean'
    });

    const headAerospace = await createUser({
        username: 'head.aerospace',
        role: 'SCHOOL_HEAD',
        firstName: 'John',
        lastName: 'Anderson',
        email: 'john.anderson@university.edu',
        phoneLocal: '+1-555-0201',
        phoneForeign: '+49-30-123-4567',
        addressLocal: '505 Campus Drive',
        city: 'University City',
        country: 'USA',
        addressForeign: '40 Quantum Lane',
        cityForeign: 'Berlin',
        countryForeign: 'Germany',
        dateOfBirth: new Date('1962-03-19'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        baseSalary: 95000,
        bio: 'Aerospace • School Dean'
    });

    const headBiotech = await createUser({
        username: 'head.biotech',
        role: 'SCHOOL_HEAD',
        firstName: 'Daniel',
        lastName: 'Kim',
        email: 'daniel.kim@university.edu',
        phoneLocal: '+1-555-0302',
        phoneForeign: '+82-2-234-9876',
        addressLocal: '88 Science Park',
        city: 'Innovation City',
        country: 'USA',
        addressForeign: '19 Genome Road',
        cityForeign: 'Seoul',
        countryForeign: 'South Korea',
        dateOfBirth: new Date('1970-11-02'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        baseSalary: 102000,
        bio: 'Biotechnology & Life Innovation • School Dean'
    });

    const headUrbanPlanning = await createUser({
        username: 'head.urban',
        role: 'SCHOOL_HEAD',
        firstName: 'Isabella',
        lastName: 'Romero',
        email: 'isabella.romero@university.edu',
        phoneLocal: '+1-555-0405',
        phoneForeign: '+52-55-1234-9876',
        addressLocal: '60 City Design Blvd',
        city: 'Metroville',
        country: 'USA',
        addressForeign: '21 Reforma Avenue',
        cityForeign: 'Mexico City',
        countryForeign: 'Mexico',
        dateOfBirth: new Date('1972-06-21'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        baseSalary: 90000,
        bio: 'Urban Planning & Smart Cities • School Dean'
    });

    const headEng = await createUser({
        username: 'head.eng',
        role: 'SCHOOL_HEAD',
        firstName: 'Marcus',
        lastName: 'Osei',
        email: 'marcus.osei@university.edu',
        phoneLocal: '+1-555-0102',
        phoneForeign: '+233-24-555-0102',
        addressLocal: '502 Campus Drive',
        city: 'University City',
        country: 'USA',
        addressForeign: '22 Bridge Street',
        cityForeign: 'Accra',
        countryForeign: 'Ghana',
        dateOfBirth: new Date('1975-09-22'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfEngineering.id,
        departmentId: mechEngDept.id,
        baseSalary: 95000,
        bio: 'Mechanical systems • School Dean'
    });

    const headComputing = await createUser({
        username: 'head.computing',
        role: 'SCHOOL_HEAD',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@university.edu',
        phoneLocal: '+1-555-0103',
        addressLocal: '456 Oak Street',
        city: 'Boston',
        country: 'USA',
        dateOfBirth: new Date('1978-07-22'),
        isLocal: true,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfComputing.id,
        departmentId: csDept.id,
        baseSalary: 98000,
        bio: 'AI & machine learning • School Dean'
    });

    const headBusiness = await createUser({
        username: 'head.business',
        role: 'SCHOOL_HEAD',
        firstName: 'Thomas',
        lastName: 'Grant',
        email: 'thomas.grant@university.edu',
        phoneLocal: '+1-555-0104',
        addressLocal: '852 Poplar Ave',
        city: 'New York',
        country: 'USA',
        dateOfBirth: new Date('1975-01-08'),
        isLocal: true,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfBusiness.id,
        departmentId: economicsDept.id,
        baseSalary: 92000,
        bio: 'Macroeconomics • School Dean'
    });

    const headLaw = await createUser({
        username: 'head.law',
        role: 'SCHOOL_HEAD',
        firstName: 'Maria',
        lastName: 'Vasquez',
        email: 'maria.vasquez@university.edu',
        phoneLocal: '+1-555-0105',
        phoneForeign: '+52-55-1234-5678',
        addressLocal: '504 Campus Drive',
        city: 'University City',
        country: 'USA',
        addressForeign: '963 Hickory Court',
        cityForeign: 'Mexico City',
        countryForeign: 'Mexico',
        dateOfBirth: new Date('1977-09-14'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfLaw.id,
        departmentId: corpLawDept.id,
        baseSalary: 100000,
        bio: 'Constitutional law • School Dean'
    });

    const headMedicine = await createUser({
        username: 'head.medicine',
        role: 'SCHOOL_HEAD',
        firstName: 'Arjun',
        lastName: 'Patel',
        email: 'arjun.patel@university.edu',
        phoneLocal: '+1-555-0106',
        phoneForeign: '+91-22-5555-0106',
        addressLocal: '506 Campus Drive',
        city: 'University City',
        country: 'USA',
        addressForeign: '159 Walnut Street',
        cityForeign: 'Mumbai',
        countryForeign: 'India',
        dateOfBirth: new Date('1972-11-22'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfMedicine.id,
        departmentId: clinicalDept.id,
        baseSalary: 125000,
        bio: 'Clinical sciences • School Dean'
    });

    const headHumanities = await createUser({
        username: 'head.humanities',
        role: 'SCHOOL_HEAD',
        firstName: 'Isabelle',
        lastName: 'Moreau',
        email: 'isabelle.moreau@university.edu',
        phoneLocal: '+1-555-0107',
        phoneForeign: '+33-1-4242-0107',
        addressLocal: '508 Campus Drive',
        city: 'University City',
        country: 'USA',
        addressForeign: '77 Rue de Montagne',
        cityForeign: 'Paris',
        countryForeign: 'France',
        dateOfBirth: new Date('1973-06-05'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfHumanities.id,
        departmentId: historyDept.id,
        baseSalary: 88000,
        bio: 'Medieval history • School Dean'
    });

    // Regular employees
    const createdUsers = {};

    // Computer Science / Data Science - ACADEMIC positions
    createdUsers['jane.smith'] = await createUser({
        username: 'jane.smith',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@university.edu',
        phoneLocal: '+1-555-0110',
        addressLocal: '789 Maple Drive',
        city: 'Seattle',
        country: 'USA',
        dateOfBirth: new Date('1982-11-10'),
        isLocal: true,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfComputing.id,
        departmentId: csDept.id,
        baseSalary: 75000,
        bio: 'Software engineering & DevOps'
    });

    createdUsers['yuki.tanaka'] = await createUser({
        username: 'yuki.tanaka',
        firstName: 'Yuki',
        lastName: 'Tanaka',
        email: 'yuki.tanaka@university.edu',
        phoneLocal: '+1-555-0122',
        phoneForeign: '+81-3-555-0122',
        addressLocal: '610 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '246 Birchwood Ave',
        cityForeign: 'Kyoto',
        countryForeign: 'Japan',
        dateOfBirth: new Date('1992-06-04'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSISTANT_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfComputing.id,
        departmentId: csDept.id,
        baseSalary: 76000,
        bio: 'Human–computer interaction & UX research'
    });

    createdUsers['olivia.chen'] = await createUser({
        username: 'olivia.chen',
        firstName: 'Olivia',
        lastName: 'Chen',
        email: 'olivia.chen@university.edu',
        phoneLocal: '+1-555-0130',
        phoneForeign: '+86-10-555-0130',
        addressLocal: '612 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '201 Lotus Court',
        cityForeign: 'Shanghai',
        countryForeign: 'China',
        dateOfBirth: new Date('1993-03-21'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSISTANT_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfComputing.id,
        departmentId: dataSciDept.id,
        baseSalary: 83000,
        bio: 'Statistical modeling & applied machine learning'
    });

    createdUsers['michael.davis'] = await createUser({
        username: 'michael.davis',
        firstName: 'Michael',
        lastName: 'Davis',
        email: 'michael.davis@university.edu',
        phoneLocal: '+1-555-0114',
        addressLocal: '147 Elm Street',
        city: 'Portland',
        country: 'USA',
        dateOfBirth: new Date('1998-12-05'),
        isLocal: true,
        employeeType: 'ADMINISTRATIVE_STAFF',
        administrativePosition: 'TECHNICIAN',
        status: 'ACTIVE',
        schoolId: schoolOfComputing.id,
        departmentId: csDept.id,
        baseSalary: 25000,
        bio: 'Undergraduate TA – Intro to Programming & Algorithms'
    });

    // Mathematics - ACADEMIC
    createdUsers['bob.johnson'] = await createUser({
        username: 'bob.johnson',
        firstName: 'Robert',
        lastName: 'Johnson',
        email: 'bob.johnson@university.edu',
        phoneLocal: '+1-555-0111',
        phoneForeign: '+1-416-555-0111',
        addressLocal: '614 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '321 Pine Lane',
        cityForeign: 'Toronto',
        countryForeign: 'Canada',
        dateOfBirth: new Date('1988-05-18'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSISTANT_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfScience.id,
        departmentId: mathDept.id,
        baseSalary: 65000,
        bio: 'Applied mathematics & mathematical modelling'
    });

    createdUsers['lukas.novak'] = await createUser({
        username: 'lukas.novak',
        firstName: 'Lukas',
        lastName: 'Novak',
        email: 'lukas.novak@university.edu',
        phoneLocal: '+1-555-0120',
        phoneForeign: '+420-2-555-0120',
        addressLocal: '616 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '861 Redwood Ave',
        cityForeign: 'Prague',
        countryForeign: 'Czech Republic',
        dateOfBirth: new Date('1989-02-16'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'LECTURER',
        status: 'ACTIVE',
        schoolId: schoolOfScience.id,
        departmentId: mathDept.id,
        baseSalary: 48000,
        bio: 'Number theory & discrete mathematics'
    });

    createdUsers['irena.popova'] = await createUser({
        username: 'irena.popova',
        firstName: 'Irena',
        lastName: 'Popova',
        email: 'irena.popova@university.edu',
        phoneLocal: '+1-555-0127',
        phoneForeign: '+7-495-555-0127',
        addressLocal: '618 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '792 Maplewood Blvd',
        cityForeign: 'Moscow',
        countryForeign: 'Russia',
        dateOfBirth: new Date('1988-11-30'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSISTANT_PROFESSOR',
        status: 'ON_LEAVE',
        schoolId: schoolOfScience.id,
        departmentId: mathDept.id,
        baseSalary: 63000,
        bio: 'Topology & abstract algebra – currently on research leave'
    });

    // Physics / Chemistry / Biology - ACADEMIC
    createdUsers['alice.williams'] = await createUser({
        username: 'alice.williams',
        firstName: 'Alice',
        lastName: 'Williams',
        email: 'alice.williams@university.edu',
        phoneLocal: '+1-555-0112',
        addressLocal: '654 Birch Road',
        city: 'Austin',
        country: 'USA',
        dateOfBirth: new Date('1990-09-25'),
        isLocal: true,
        employeeType: 'ACADEMIC',
        academicPosition: 'LECTURER',
        status: 'ON_LEAVE',
        schoolId: schoolOfScience.id,
        departmentId: physicsDept.id,
        baseSalary: 55000,
        bio: 'Quantum optics – on sabbatical'
    });

    createdUsers['hans.mueller'] = await createUser({
        username: 'hans.mueller',
        firstName: 'Hans',
        lastName: 'Mueller',
        email: 'hans.mueller@university.edu',
        phoneLocal: '+1-555-0128',
        phoneForeign: '+49-30-555-0128',
        addressLocal: '620 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '357 Chestnut Road',
        cityForeign: 'Munich',
        countryForeign: 'Germany',
        dateOfBirth: new Date('1974-03-05'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfScience.id,
        departmentId: physicsDept.id,
        baseSalary: 80000,
        bio: 'Theoretical physics & quantum field theory'
    });

    createdUsers['lina.kim'] = await createUser({
        username: 'lina.kim',
        firstName: 'Lina',
        lastName: 'Kim',
        email: 'lina.kim@university.edu',
        phoneLocal: '+1-555-0116',
        phoneForeign: '+82-2-555-0116',
        addressLocal: '622 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '741 Ash Lane',
        cityForeign: 'Seoul',
        countryForeign: 'South Korea',
        dateOfBirth: new Date('1981-06-30'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfScience.id,
        departmentId: chemistryDept.id,
        baseSalary: 85000,
        bio: 'Materials chemistry & nanotechnology'
    });

    createdUsers['carlos.ruiz'] = await createUser({
        username: 'carlos.ruiz',
        firstName: 'Carlos',
        lastName: 'Ruiz',
        email: 'carlos.ruiz@university.edu',
        phoneLocal: '+1-555-0115',
        phoneForeign: '+34-91-555-0115',
        addressLocal: '624 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '369 Spruce Blvd',
        cityForeign: 'Madrid',
        countryForeign: 'Spain',
        dateOfBirth: new Date('1979-04-12'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfScience.id,
        departmentId: biologyDept.id,
        baseSalary: 72000,
        bio: 'Molecular genetics & CRISPR applications'
    });

    createdUsers['natalie.wright'] = await createUser({
        username: 'natalie.wright',
        firstName: 'Natalie',
        lastName: 'Wright',
        email: 'natalie.wright@university.edu',
        phoneLocal: '+1-555-0117',
        addressLocal: '486 Magnolia Drive',
        city: 'Denver',
        country: 'USA',
        dateOfBirth: new Date('1993-07-19'),
        isLocal: true,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSISTANT_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfScience.id,
        departmentId: biologyDept.id,
        baseSalary: 70000,
        bio: 'Ecology & climate change biology'
    });

    // Engineering - ADMINISTRATIVE_STAFF (technicians)
    createdUsers['daniel.ford'] = await createUser({
        username: 'daniel.ford',
        firstName: 'Daniel',
        lastName: 'Ford',
        email: 'daniel.ford@university.edu',
        phoneLocal: '+1-555-0124',
        addressLocal: '468 Rosewood Court',
        city: 'Chicago',
        country: 'USA',
        dateOfBirth: new Date('1996-01-23'),
        isLocal: true,
        employeeType: 'ADMINISTRATIVE_STAFF',
        administrativePosition: 'TECHNICIAN',
        status: 'ACTIVE',
        schoolId: schoolOfEngineering.id,
        departmentId: mechEngDept.id,
        baseSalary: 22000,
        bio: 'Mechanical engineering lab assistant'
    });

    createdUsers['zoe.adams'] = await createUser({
        username: 'zoe.adams',
        firstName: 'Zoe',
        lastName: 'Adams',
        email: 'zoe.adams@university.edu',
        phoneLocal: '+1-555-0134',
        addressLocal: '330 Willow Way',
        city: 'Atlanta',
        country: 'USA',
        dateOfBirth: new Date('1997-10-30'),
        isLocal: true,
        employeeType: 'ADMINISTRATIVE_STAFF',
        administrativePosition: 'TECHNICIAN',
        status: 'ACTIVE',
        schoolId: schoolOfEngineering.id,
        departmentId: civilEngDept.id,
        baseSalary: 24000,
        bio: 'Structural engineering lab support'
    });

    // Business / Economics / HR - ADMINISTRATIVE
    createdUsers['sarah.brown'] = await createUser({
        username: 'sarah.brown',
        firstName: 'Sarah',
        lastName: 'Brown',
        email: 'sarah.brown@university.edu',
        phoneLocal: '+1-555-0113',
        phoneForeign: '+44-20-555-0113',
        addressLocal: '626 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '987 Cedar Court',
        cityForeign: 'London',
        countryForeign: 'UK',
        dateOfBirth: new Date('1995-02-14'),
        isLocal: false,
        employeeType: 'ADMINISTRATIVE_STAFF',
        administrativePosition: 'RECEPTIONIST',
        status: 'ACTIVE',
        schoolId: schoolOfBusiness.id,
        departmentId: hrDept.id,
        baseSalary: 42000,
        bio: 'HR records, payroll & onboarding'
    });

    createdUsers['amira.hassan'] = await createUser({
        username: 'amira.hassan',
        firstName: 'Amira',
        lastName: 'Hassan',
        email: 'amira.hassan@university.edu',
        phoneLocal: '+1-555-0121',
        phoneForeign: '+20-2-555-0121',
        addressLocal: '628 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '972 Juniper Blvd',
        cityForeign: 'Cairo',
        countryForeign: 'Egypt',
        dateOfBirth: new Date('1994-08-11'),
        isLocal: false,
        employeeType: 'ADMINISTRATIVE_STAFF',
        administrativePosition: 'RECEPTIONIST',
        status: 'ACTIVE',
        schoolId: schoolOfBusiness.id,
        departmentId: hrDept.id,
        baseSalary: 51000,
        bio: 'Department scheduling & event coordination'
    });

    createdUsers['marcus.lee'] = await createUser({
        username: 'marcus.lee',
        firstName: 'Marcus',
        lastName: 'Lee',
        email: 'marcus.lee@university.edu',
        phoneLocal: '+1-555-0126',
        addressLocal: '681 Oakwood Lane',
        city: 'San Francisco',
        country: 'USA',
        dateOfBirth: new Date('1984-09-15'),
        isLocal: true,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfBusiness.id,
        departmentId: economicsDept.id,
        baseSalary: 64000,
        bio: 'Behavioral economics & experimental methods'
    });

    // Law / Medicine / Humanities / Philosophy - ACADEMIC
    createdUsers['kevin.oconnor'] = await createUser({
        username: 'kevin.oconnor',
        firstName: 'Kevin',
        lastName: "O'Connor",
        email: 'kevin.oconnor@university.edu',
        phoneLocal: '+1-555-0118',
        phoneForeign: '+353-1-555-0118',
        addressLocal: '630 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '624 Sycamore Street',
        cityForeign: 'Dublin',
        countryForeign: 'Ireland',
        dateOfBirth: new Date('1986-10-03'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfLaw.id,
        departmentId: corpLawDept.id,
        baseSalary: 91000,
        bio: 'Corporate governance & commercial law'
    });

    createdUsers['ryan.murphy'] = await createUser({
        username: 'ryan.murphy',
        firstName: 'Ryan',
        lastName: 'Murphy',
        email: 'ryan.murphy@university.edu',
        phoneLocal: '+1-555-0131',
        addressLocal: '88 Clover Lane',
        city: 'Philadelphia',
        country: 'USA',
        dateOfBirth: new Date('1991-08-14'),
        isLocal: true,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSISTANT_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfLaw.id,
        departmentId: intlLawDept.id,
        baseSalary: 94000,
        bio: 'International trade & WTO law'
    });

    createdUsers['priya.singh'] = await createUser({
        username: 'priya.singh',
        firstName: 'Priya',
        lastName: 'Singh',
        email: 'priya.singh@university.edu',
        phoneLocal: '+1-555-0119',
        phoneForeign: '+91-11-555-0119',
        addressLocal: '632 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '753 Cypress Lane',
        cityForeign: 'Delhi',
        countryForeign: 'India',
        dateOfBirth: new Date('1991-05-27'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfMedicine.id,
        departmentId: clinicalDept.id,
        baseSalary: 110000,
        bio: 'Pediatrics & clinical epidemiology'
    });

    createdUsers['fatima.ndiaye'] = await createUser({
        username: 'fatima.ndiaye',
        firstName: 'Fatima',
        lastName: 'Ndiaye',
        email: 'fatima.ndiaye@university.edu',
        phoneLocal: '+1-555-0132',
        phoneForeign: '+221-77-555-0132',
        addressLocal: '634 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '55 Sahara Road',
        cityForeign: 'Dakar',
        countryForeign: 'Senegal',
        dateOfBirth: new Date('1989-12-01'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfMedicine.id,
        departmentId: pharmacyDept.id,
        baseSalary: 74000,
        bio: 'Pharmacology of tropical diseases'
    });

    createdUsers['erik.lindqvist'] = await createUser({
        username: 'erik.lindqvist',
        firstName: 'Erik',
        lastName: 'Lindqvist',
        email: 'erik.lindqvist@university.edu',
        phoneLocal: '+1-555-0133',
        phoneForeign: '+46-8-555-0133',
        addressLocal: '636 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '14 Nordic Blvd',
        cityForeign: 'Stockholm',
        countryForeign: 'Sweden',
        dateOfBirth: new Date('1986-05-09'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'LECTURER',
        status: 'ACTIVE',
        schoolId: schoolOfHumanities.id,
        departmentId: philosophyDept.id,
        baseSalary: 58000,
        bio: 'Applied ethics & philosophy of AI'
    });

    createdUsers['sofia.rossi'] = await createUser({
        username: 'sofia.rossi',
        firstName: 'Sofia',
        lastName: 'Rossi',
        email: 'sofia.rossi@university.edu',
        phoneLocal: '+1-555-0123',
        phoneForeign: '+39-06-555-0123',
        addressLocal: '638 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '357 Hawthorn Road',
        cityForeign: 'Rome',
        countryForeign: 'Italy',
        dateOfBirth: new Date('1985-04-17'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfScience.id,
        departmentId: chemistryDept.id,
        baseSalary: 82000,
        bio: 'Polymer chemistry & sustainable materials'
    });

    // Additional users
    createdUsers['elena.kovacs'] = await createUser({
        username: 'elena.kovacs',
        firstName: 'Elena',
        lastName: 'Kovács',
        email: 'elena.kovacs@university.edu',
        phoneLocal: '+1-555-0140',
        phoneForeign: '+36-1-555-0140',
        addressLocal: '640 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '42 Danube Street',
        cityForeign: 'Budapest',
        countryForeign: 'Hungary',
        dateOfBirth: new Date('1987-09-12'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfBusiness.id,
        departmentId: financeDept.id,
        baseSalary: 78000,
        bio: 'Corporate finance and investment analysis'
    });

    createdUsers['rajesh.patel'] = await createUser({
        username: 'rajesh.patel',
        firstName: 'Rajesh',
        lastName: 'Patel',
        email: 'rajesh.patel@university.edu',
        phoneLocal: '+1-555-0141',
        phoneForeign: '+91-22-555-0141',
        addressLocal: '642 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '18 Lotus Gardens',
        cityForeign: 'Mumbai',
        countryForeign: 'India',
        dateOfBirth: new Date('1990-04-03'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSISTANT_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfBusiness.id,
        departmentId: financeDept.id,
        baseSalary: 68000,
        bio: 'Financial markets and risk management'
    });

    createdUsers['lara.mendes'] = await createUser({
        username: 'lara.mendes',
        firstName: 'Lara',
        lastName: 'Mendes',
        email: 'lara.mendes@university.edu',
        phoneLocal: '+1-555-0142',
        phoneForeign: '+55-11-555-0142',
        addressLocal: '644 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '305 Avenida Paulista',
        cityForeign: 'São Paulo',
        countryForeign: 'Brazil',
        dateOfBirth: new Date('1994-11-28'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSISTANT_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfEngineering.id,
        departmentId: civilEngDept.id,
        baseSalary: 67000,
        bio: 'Sustainable urban infrastructure design'
    });

    createdUsers['omar.khalil'] = await createUser({
        username: 'omar.khalil',
        firstName: 'Omar',
        lastName: 'Khalil',
        email: 'omar.khalil@university.edu',
        phoneLocal: '+1-555-0143',
        phoneForeign: '+20-2-555-0143',
        addressLocal: '646 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '76 Nile View Rd',
        cityForeign: 'Alexandria',
        countryForeign: 'Egypt',
        dateOfBirth: new Date('1983-07-19'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'LECTURER',
        status: 'ACTIVE',
        schoolId: schoolOfEngineering.id,
        departmentId: elecEngDept.id,
        baseSalary: 62000,
        bio: 'Power systems and renewable energy integration'
    });

    createdUsers['clara.martin'] = await createUser({
        username: 'clara.martin',
        firstName: 'Clara',
        lastName: 'Martin',
        email: 'clara.martin@university.edu',
        phoneLocal: '+1-555-0144',
        phoneForeign: '+33-1-555-0144',
        addressLocal: '648 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '19 Rue de Rivoli',
        cityForeign: 'Paris',
        countryForeign: 'France',
        dateOfBirth: new Date('1979-02-14'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfHumanities.id,
        departmentId: historyDept.id,
        baseSalary: 72000,
        bio: 'Modern European history and cultural studies'
    });

    createdUsers['david.cohen'] = await createUser({
        username: 'david.cohen',
        firstName: 'David',
        lastName: 'Cohen',
        email: 'david.cohen@university.edu',
        phoneLocal: '+1-555-0145',
        phoneForeign: '+972-3-555-0145',
        addressLocal: '650 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '14 HaYarkon St',
        cityForeign: 'Tel Aviv',
        countryForeign: 'Israel',
        dateOfBirth: new Date('1985-10-08'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'LECTURER',
        status: 'ON_LEAVE',
        schoolId: schoolOfHumanities.id,
        departmentId: philosophyDept.id,
        baseSalary: 59000,
        bio: 'Philosophy of science – currently on sabbatical'
    });

    createdUsers['liam.nguyen'] = await createUser({
        username: 'liam.nguyen',
        firstName: 'Liam',
        lastName: 'Nguyen',
        email: 'liam.nguyen@university.edu',
        phoneLocal: '+1-555-0146',
        phoneForeign: '+61-2-555-0146',
        addressLocal: '652 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '88 Harbour View',
        cityForeign: 'Sydney',
        countryForeign: 'Australia',
        dateOfBirth: new Date('1999-05-22'),
        isLocal: false,
        employeeType: 'ADMINISTRATIVE_STAFF',
        administrativePosition: 'TECHNICIAN',
        status: 'ACTIVE',
        schoolId: schoolOfComputing.id,
        departmentId: csDept.id,
        baseSalary: 26000,
        bio: 'Teaching assistant – Data Structures & Algorithms'
    });

    createdUsers['fatima.alvarez'] = await createUser({
        username: 'fatima.alvarez',
        firstName: 'Fatima',
        lastName: 'Alvarez',
        email: 'fatima.alvarez@university.edu',
        phoneLocal: '+1-555-0147',
        phoneForeign: '+52-55-555-0147',
        addressLocal: '654 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '215 Reforma Ave',
        cityForeign: 'Mexico City',
        countryForeign: 'Mexico',
        dateOfBirth: new Date('1996-12-17'),
        isLocal: false,
        employeeType: 'ADMINISTRATIVE_STAFF',
        administrativePosition: 'RECEPTIONIST',
        status: 'ACTIVE',
        schoolId: schoolOfBusiness.id,
        departmentId: hrDept.id,
        baseSalary: 41000,
        bio: 'Employee relations and benefits administration'
    });

    createdUsers['andrei.ivanov'] = await createUser({
        username: 'andrei.ivanov',
        firstName: 'Andrei',
        lastName: 'Ivanov',
        email: 'andrei.ivanov@university.edu',
        phoneLocal: '+1-555-0148',
        phoneForeign: '+7-812-555-0148',
        addressLocal: '656 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '47 Nevsky Prospekt',
        cityForeign: 'Saint Petersburg',
        countryForeign: 'Russia',
        dateOfBirth: new Date('1982-08-30'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'LECTURER',
        status: 'TERMINATED',
        schoolId: schoolOfScience.id,
        departmentId: mathDept.id,
        baseSalary: 57000,
        bio: 'Former lecturer in probability theory'
    });

    createdUsers['nina.santos'] = await createUser({
        username: 'nina.santos',
        firstName: 'Nina',
        lastName: 'Santos',
        email: 'nina.santos@university.edu',
        phoneLocal: '+1-555-0149',
        phoneForeign: '+63-2-555-0149',
        addressLocal: '658 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '112 Quezon Ave',
        cityForeign: 'Manila',
        countryForeign: 'Philippines',
        dateOfBirth: new Date('1988-03-11'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfMedicine.id,
        departmentId: clinicalDept.id,
        baseSalary: 108000,
        bio: 'Internal medicine and medical education'
    });

    createdUsers['ahmed.rashid'] = await createUser({
        username: 'ahmed.rashid',
        firstName: 'Ahmed',
        lastName: 'Rashid',
        email: 'ahmed.rashid@university.edu',
        phoneLocal: '+1-555-0150',
        phoneForeign: '+971-4-555-0150',
        addressLocal: '660 Campus Blvd',
        city: 'University City',
        country: 'USA',
        addressForeign: '305 Sheikh Zayed Rd',
        cityForeign: 'Dubai',
        countryForeign: 'UAE',
        dateOfBirth: new Date('1990-06-25'),
        isLocal: false,
        employeeType: 'ACADEMIC',
        academicPosition: 'ASSOCIATE_PROFESSOR',
        status: 'ACTIVE',
        schoolId: schoolOfMedicine.id,
        departmentId: pharmacyDept.id,
        baseSalary: 76000,
        bio: 'Clinical pharmacology and drug safety'
    });

    console.log(`✅ ${Object.keys(createdUsers).length + 8} Users created (admin + 7 heads + ${Object.keys(createdUsers).length} employees)`);

    // ─────────────────────────────────────────────
    // School Heads relation
    // ─────────────────────────────────────────────
    console.log('📝 Assigning School Heads...');

    await prisma.school_Head.createMany({
        data: [
            { userId: headScience.id, schoolId: schoolOfScience.id },
            { userId: headEng.id, schoolId: schoolOfEngineering.id },
            { userId: headComputing.id, schoolId: schoolOfComputing.id },
            { userId: headBusiness.id, schoolId: schoolOfBusiness.id },
            { userId: headLaw.id, schoolId: schoolOfLaw.id },
            { userId: headMedicine.id, schoolId: schoolOfMedicine.id },
            { userId: headHumanities.id, schoolId: schoolOfHumanities.id },
            { userId: headAerospace.id },
            { userId: headBiotech.id },
            { userId: headUrbanPlanning.id }
        ],
        skipDuplicates: true,
    });

    console.log('✅ 7 School Heads assigned');

    // ─────────────────────────────────────────────
    // Emergency Contacts
    // ─────────────────────────────────────────────
    console.log('📝 Seeding Emergency Contacts...');

    const emergencyContactsData = [
        { userId: admin.id, contactName: 'Emily User', relationship: 'Spouse', phonePrimary: '+1-555-0200', email: 'emily.user@email.com' },
        { userId: createdUsers['jane.smith'].id, contactName: 'Robert Smith', relationship: 'Father', phonePrimary: '+1-555-0210', email: 'robert.smith@email.com' },
        { userId: createdUsers['yuki.tanaka'].id, contactName: 'Haruko Tanaka', relationship: 'Mother', phonePrimary: '+81-3-555-0220', email: 'haruko.tanaka@email.com' },
        { userId: createdUsers['olivia.chen'].id, contactName: 'Liang Chen', relationship: 'Brother', phonePrimary: '+86-10-555-0230', email: 'liang.chen@email.com' },
        { userId: createdUsers['michael.davis'].id, contactName: 'Sarah Davis', relationship: 'Mother', phonePrimary: '+1-555-0240', email: 'sarah.davis@email.com' },
        { userId: createdUsers['bob.johnson'].id, contactName: 'Mary Johnson', relationship: 'Spouse', phonePrimary: '+1-555-0250', email: 'mary.johnson@email.com' },
        { userId: createdUsers['alice.williams'].id, contactName: 'Thomas Williams', relationship: 'Father', phonePrimary: '+1-555-0260', email: 'thomas.williams@email.com' },
        { userId: createdUsers['hans.mueller'].id, contactName: 'Karin Mueller', relationship: 'Spouse', phonePrimary: '+49-30-555-0270', email: 'karin.mueller@email.com' },
        { userId: createdUsers['lina.kim'].id, contactName: 'Jin Kim', relationship: 'Brother', phonePrimary: '+82-2-555-0280', email: 'jin.kim@email.com' },
        { userId: createdUsers['carlos.ruiz'].id, contactName: 'Isabel Ruiz', relationship: 'Spouse', phonePrimary: '+34-91-555-0290', email: 'isabel.ruiz@email.com' },
        { userId: createdUsers['natalie.wright'].id, contactName: 'George Wright', relationship: 'Father', phonePrimary: '+1-555-0300', email: 'george.wright@email.com' },
        { userId: createdUsers['daniel.ford'].id, contactName: 'Laura Ford', relationship: 'Mother', phonePrimary: '+1-555-0310', email: 'laura.ford@email.com' },
        { userId: createdUsers['zoe.adams'].id, contactName: 'Peter Adams', relationship: 'Brother', phonePrimary: '+1-555-0320', email: 'peter.adams@email.com' },
        { userId: createdUsers['sarah.brown'].id, contactName: 'Michael Brown', relationship: 'Spouse', phonePrimary: '+44-20-555-0330', email: 'michael.brown@email.com' },
        { userId: createdUsers['amira.hassan'].id, contactName: 'Hassan Ali', relationship: 'Father', phonePrimary: '+20-2-555-0340', email: 'hassan.ali@email.com' },
        { userId: createdUsers['marcus.lee'].id, contactName: 'Angela Lee', relationship: 'Mother', phonePrimary: '+1-555-0350', email: 'angela.lee@email.com' },
        { userId: createdUsers['kevin.oconnor'].id, contactName: 'Siobhan OConnor', relationship: 'Sister', phonePrimary: '+353-1-555-0360', email: 'siobhan.oconnor@email.com' },
        { userId: createdUsers['priya.singh'].id, contactName: 'Raj Singh', relationship: 'Father', phonePrimary: '+91-11-555-0370', email: 'raj.singh@email.com' },
        { userId: createdUsers['erik.lindqvist'].id, contactName: 'Anna Lindqvist', relationship: 'Spouse', phonePrimary: '+46-8-555-0380', email: 'anna.lindqvist@email.com' },
    ];

    await prisma.emergencyContact.createMany({
        data: emergencyContactsData,
        skipDuplicates: true
    });

    console.log('✅ 19 Emergency contacts created');

    // ─────────────────────────────────────────────
    // Todos
    // ─────────────────────────────────────────────
    console.log('📝 Seeding Todos...');

    const todosData = [
        { userId: admin.id, title: 'Review payroll system', description: 'Check for any discrepancies in Q4', status: 'Pending' },
        { userId: admin.id, title: 'Update HR policies', description: 'Align with new labor laws', status: 'In Progress' },
        { userId: createdUsers['jane.smith'].id, title: 'Prepare lecture slides', description: 'Software Engineering 301', status: 'Completed', completedAt: new Date('2024-02-15') },
        { userId: createdUsers['jane.smith'].id, title: 'Grade midterm exams', description: 'CS 201 midterms', status: 'Pending' },
        { userId: createdUsers['yuki.tanaka'].id, title: 'Submit research proposal', description: 'HCI lab funding', status: 'In Progress' },
        { userId: createdUsers['olivia.chen'].id, title: 'Attend ML conference', description: 'Register for NeurIPS', status: 'Pending' },
        { userId: createdUsers['bob.johnson'].id, title: 'Update course syllabus', description: 'Math 405', status: 'Completed', completedAt: new Date('2024-01-20') },
        { userId: createdUsers['alice.williams'].id, title: 'Lab equipment maintenance', description: 'Schedule quarterly check', status: 'Pending' },
        { userId: createdUsers['hans.mueller'].id, title: 'Review PhD applications', description: 'Physics department', status: 'In Progress' },
        { userId: createdUsers['lina.kim'].id, title: 'Submit grant report', description: 'NSF funding update', status: 'Pending' },
        { userId: createdUsers['carlos.ruiz'].id, title: 'Organize lab meeting', description: 'Weekly genetics seminar', status: 'Completed', completedAt: new Date('2024-02-10') },
        { userId: createdUsers['natalie.wright'].id, title: 'Field work preparation', description: 'Ecology survey equipment', status: 'In Progress' },
        { userId: createdUsers['daniel.ford'].id, title: 'Calibrate instruments', description: 'Lab 301 equipment', status: 'Pending' },
        { userId: createdUsers['sarah.brown'].id, title: 'Process new hires', description: '3 employees starting March', status: 'In Progress' },
        { userId: createdUsers['amira.hassan'].id, title: 'Schedule faculty meetings', description: 'Q1 department reviews', status: 'Pending' },
        { userId: createdUsers['marcus.lee'].id, title: 'Prepare conference paper', description: 'Behavioral economics research', status: 'In Progress' },
        { userId: createdUsers['kevin.oconnor'].id, title: 'Review legal case studies', description: 'Update curriculum materials', status: 'Pending' },
        { userId: createdUsers['priya.singh'].id, title: 'Clinical rounds schedule', description: 'Next semester planning', status: 'Completed', completedAt: new Date('2024-02-05') },
        { userId: createdUsers['erik.lindqvist'].id, title: 'Philosophy seminar prep', description: 'AI Ethics discussion', status: 'In Progress' },
        { userId: createdUsers['sofia.rossi'].id, title: 'Lab safety inspection', description: 'Annual compliance check', status: 'Pending' },
        { userId: createdUsers['elena.kovacs'].id, title: 'Review student portfolios', description: 'Finance 401 projects', status: 'Pending' },
        { userId: createdUsers['lara.mendes'].id, title: 'Site visit planning', description: 'Infrastructure project tour', status: 'In Progress' },
        { userId: createdUsers['nina.santos'].id, title: 'Medical education workshop', description: 'Teaching methodology update', status: 'Pending' },
    ];

    await prisma.todo.createMany({
        data: todosData,
        skipDuplicates: true
    });

    console.log('✅ 23 Todos created');

    console.log("Creating events");

    await prisma.event.createMany({
        data: [
            {
                title: "Physics Dept Meeting",
                location: "Room 402",
                startTime: new Date("2026-10-25T10:00:00"),
            },
            {
                title: "AI Research Seminar",
                location: "Auditorium A",
                startTime: new Date("2026-11-03T14:30:00"),
            },
            {
                title: "Cybersecurity Workshop",
                location: "Lab 210",
                startTime: new Date("2026-12-12T09:00:00"),
            },
        ],
    });

    console.log("✅ Events created");

    console.log('🎉 Seed completed!');
    console.log('\n📊 Summary:');
    console.log('   • 7 Schools');
    console.log('   • 18 Departments');
    console.log('   • 42 Users (1 admin + 7 school heads + 34 employees)');
    console.log('   • 19 Emergency Contacts');
    console.log('   • 23 Todos');
    console.log('\n🔑 Login credentials:');
    console.log('   Username: admin / Password: password123');
    console.log('   Username: head.science / Password: password123');
    console.log('   Username: jane.smith / Password: password123');
    console.log('   ... (all users have password: password123)');
}

main()
    .catch(e => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });