 enum NameStrategyFavor {
  FIRST_NAME,
  LAST_NAME,
}

 class UserNameResolverService {
    getFirstName(
        firstName: string,
        lastName: string,
        fullName: string,
        border: number = 1,
        strategyFavor: NameStrategyFavor = NameStrategyFavor.FIRST_NAME,
    ): string {

        if (!firstName && !lastName && fullName) {
            const fullNameParts: string[] = this.getFNameParts(fullName);
            border = this.countBorder(border, fullNameParts.length, strategyFavor);
            console.log('fullNameParts', fullNameParts);
            console.log('border', border);
            return fullNameParts.slice(0, border).join(' ');
        }

        if (!firstName && lastName && fullName) {
            return fullName.replace(lastName, '').trim();
        }

        return firstName;
    }

    getLastName(
        firstName: string,
        lastName: string,
        fullName: string,
        border: number = 1,
        strategyFavor: NameStrategyFavor = NameStrategyFavor.FIRST_NAME,
    ): string {

        if (!firstName && !lastName && fullName) {
            const fullNameParts: string[] = this.getFNameParts(fullName);
            border = this.countBorder(border, fullNameParts.length, strategyFavor);

            return fullNameParts.slice(border).join(' ');
        }
        return lastName;
    }

    getFullName(firstName: string, lastName: string): string {
        return `${firstName} ${lastName}`;
    }

    private getFNameParts(fullName: string): string[] {
        return fullName.trim().split(' ');
    }

    private countBorder(border: number, picLength: number, strategyFavor: NameStrategyFavor): number {
        if (border >= picLength) {
            if (strategyFavor === NameStrategyFavor.FIRST_NAME) {
                return picLength - 1;
            }

            if (strategyFavor === NameStrategyFavor.LAST_NAME) {
                return 1;
            }
        }

        return border;
    }
}

const classTest = new UserNameResolverService();
const firstName = '';
const lastName = '';
const fullName = 'G M T Dulll';
const border = 4;

const res1 = classTest.getFirstName(firstName, lastName, fullName, border, 0);
const res2 = classTest.getLastName(firstName, lastName, fullName, border, 1);

console.log('TEST 1> First Name', res1);
console.log('TEST > Last Name', res2);