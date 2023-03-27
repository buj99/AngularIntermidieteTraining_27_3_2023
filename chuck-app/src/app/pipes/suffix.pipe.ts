import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "suffix",
    pure: true,
    standalone: true
})
export class SuffixPipe implements PipeTransform {
    transform(value: string | undefined, suffixName: string, suffixOccurences: number = 1) {
        return `${value ?? '' }${suffixName.repeat(suffixOccurences)}`;
    }
}