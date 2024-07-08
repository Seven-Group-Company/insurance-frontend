import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {SuccessfulLoginDto} from "@/services/authentication/dtos/response/SuccessfulLoginDto";
import jwt from "jsonwebtoken";
import {AuthenticatedUser, DecodedRefreshToken} from "@/types/authentication";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatUserName(name: string = ""): string {
    name = name.trim()
    if (name === "" || name === null || name === undefined) {
        return "[ NAME ]"
    }
    return `${name.toUpperCase().slice(0, 17)}${name.length! > 17 ? ".." : ""}`
}

export function formatUserEmail(email: string = ""): string {
    // Validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return email;
    }

    // Split the email into username and domain

    // Truncate the username to the first 16 characters if it exceeds 17 characters
    const truncatedUsername = email.length > 17 ? email.slice(0, 16) : email;

    // Construct the new format
    return `@${truncatedUsername}`;
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The string to be capitalized.
 * @returns {string} The capitalized string.
 */
export function capitalizeFirstLetter(str: string): string {
    str = str.replace("-", " ")
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export function decodeToken(token: SuccessfulLoginDto): AuthenticatedUser {

    const decodedToken = jwt.decode(token.token) as DecodedRefreshToken;

    return {
        id: decodedToken.id,
        name: decodedToken.name,
        email: decodedToken.email,
        userType: decodedToken.userType,
        accessLevel: decodedToken.accessLevel,
    } as AuthenticatedUser

}


export function convertToTitleCase(input: string): string {
    return input
        .split('_') // Split by underscores
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
        .join(' '); // Join with spaces
}

export function convertDateToMonthDayYear(dateString: string): string {
    if (dateString === "") {
        return "-"
    }
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Options for formatting the date
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};

    // Use the Intl.DateTimeFormat object to format the date
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
