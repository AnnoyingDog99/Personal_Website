import { Node } from './Node';
import * as THREE from 'three';

export class Controller {
	private static _instance: Controller;

	private _nodes: Node[];
	private _bottomLeft: THREE.Vector3;
	private _topRight: THREE.Vector3;
	private _kClosest: number;

	private constructor() {
		this._nodes = [];
	}

	public static getInstance(): Controller {
		if (!Controller._instance) {
			Controller._instance = new Controller();
		}
		return Controller._instance;
	}

	public init(bottomLeft: THREE.Vector3, topRight: THREE.Vector3, kClosest: number) {
		this._bottomLeft = bottomLeft;
		this._topRight = topRight;
		this._kClosest = kClosest;
	}

	public generatePoints(amount: number) {
		this._nodes = [];
		const RADIUS = 0.5;
		for (let i = 0; i < amount; i++) {
			const x =
				Math.random() * (this._topRight.x - RADIUS - (this._bottomLeft.x + RADIUS)) +
				(this._bottomLeft.x + RADIUS);
			const y =
				Math.random() * (this._topRight.y - RADIUS - (this._bottomLeft.y + RADIUS)) +
				(this._bottomLeft.y + RADIUS);
			const node = new Node(new THREE.Vector3(x, y, 0), this._kClosest, RADIUS);
			this._nodes.push(node);
		}
	}

	public update() {
		this._nodes.forEach((node) => {
			const neighbours = this._nodes
				.filter((n) => n !== node)
				.sort((a, b) => {
					return a.position.distanceTo(node.position) - b.position.distanceTo(node.position);
				})
				.slice(0, this._kClosest);
			node.neighbours = neighbours;
		});
	}

	get nodes() {
		return this._nodes;
	}
}
