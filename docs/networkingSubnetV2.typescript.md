# `networkingSubnetV2` Submodule <a name="`networkingSubnetV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingSubnetV2 <a name="NetworkingSubnetV2" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2 opentelekomcloud_networking_subnet_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

new networkingSubnetV2.NetworkingSubnetV2(scope: Construct, id: string, config: NetworkingSubnetV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config">NetworkingSubnetV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config">NetworkingSubnetV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools">putAllocationPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes">putHostRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetAllocationPools">resetAllocationPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetDnsNameservers">resetDnsNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetEnableDhcp">resetEnableDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetGatewayIp">resetGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetHostRoutes">resetHostRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetNoGateway">resetNoGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllocationPools` <a name="putAllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools"></a>

```typescript
public putAllocationPools(value: IResolvable | NetworkingSubnetV2AllocationPools[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>[]

---

##### `putHostRoutes` <a name="putHostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes"></a>

```typescript
public putHostRoutes(value: IResolvable | NetworkingSubnetV2HostRoutes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkingSubnetV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

---

##### `resetAllocationPools` <a name="resetAllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetAllocationPools"></a>

```typescript
public resetAllocationPools(): void
```

##### `resetDnsNameservers` <a name="resetDnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetDnsNameservers"></a>

```typescript
public resetDnsNameservers(): void
```

##### `resetEnableDhcp` <a name="resetEnableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetEnableDhcp"></a>

```typescript
public resetEnableDhcp(): void
```

##### `resetGatewayIp` <a name="resetGatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetGatewayIp"></a>

```typescript
public resetGatewayIp(): void
```

##### `resetHostRoutes` <a name="resetHostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetHostRoutes"></a>

```typescript
public resetHostRoutes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNoGateway` <a name="resetNoGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetNoGateway"></a>

```typescript
public resetNoGateway(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkingSubnetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

networkingSubnetV2.NetworkingSubnetV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

networkingSubnetV2.NetworkingSubnetV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

networkingSubnetV2.NetworkingSubnetV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkingSubnetV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkingSubnetV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkingSubnetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingSubnetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPools">allocationPools</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList">NetworkingSubnetV2AllocationPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutes">hostRoutes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList">NetworkingSubnetV2HostRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference">NetworkingSubnetV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPoolsInput">allocationPoolsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameserversInput">dnsNameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcpInput">enableDhcpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIpInput">gatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutesInput">hostRoutesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersionInput">ipVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGatewayInput">noGatewayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameservers">dnsNameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcp">enableDhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersion">ipVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGateway">noGateway</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allocationPools`<sup>Required</sup> <a name="allocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPools"></a>

```typescript
public readonly allocationPools: NetworkingSubnetV2AllocationPoolsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList">NetworkingSubnetV2AllocationPoolsList</a>

---

##### `hostRoutes`<sup>Required</sup> <a name="hostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutes"></a>

```typescript
public readonly hostRoutes: NetworkingSubnetV2HostRoutesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList">NetworkingSubnetV2HostRoutesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingSubnetV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference">NetworkingSubnetV2TimeoutsOutputReference</a>

---

##### `allocationPoolsInput`<sup>Optional</sup> <a name="allocationPoolsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPoolsInput"></a>

```typescript
public readonly allocationPoolsInput: IResolvable | NetworkingSubnetV2AllocationPools[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>[]

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `dnsNameserversInput`<sup>Optional</sup> <a name="dnsNameserversInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameserversInput"></a>

```typescript
public readonly dnsNameserversInput: string[];
```

- *Type:* string[]

---

##### `enableDhcpInput`<sup>Optional</sup> <a name="enableDhcpInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcpInput"></a>

```typescript
public readonly enableDhcpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIpInput"></a>

```typescript
public readonly gatewayIpInput: string;
```

- *Type:* string

---

##### `hostRoutesInput`<sup>Optional</sup> <a name="hostRoutesInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutesInput"></a>

```typescript
public readonly hostRoutesInput: IResolvable | NetworkingSubnetV2HostRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `noGatewayInput`<sup>Optional</sup> <a name="noGatewayInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGatewayInput"></a>

```typescript
public readonly noGatewayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkingSubnetV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `dnsNameservers`<sup>Required</sup> <a name="dnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameservers"></a>

```typescript
public readonly dnsNameservers: string[];
```

- *Type:* string[]

---

##### `enableDhcp`<sup>Required</sup> <a name="enableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcp"></a>

```typescript
public readonly enableDhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `noGateway`<sup>Required</sup> <a name="noGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGateway"></a>

```typescript
public readonly noGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingSubnetV2AllocationPools <a name="NetworkingSubnetV2AllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

const networkingSubnetV2AllocationPools: networkingSubnetV2.NetworkingSubnetV2AllocationPools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#end NetworkingSubnetV2#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#start NetworkingSubnetV2#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#end NetworkingSubnetV2#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#start NetworkingSubnetV2#start}.

---

### NetworkingSubnetV2Config <a name="NetworkingSubnetV2Config" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

const networkingSubnetV2Config: networkingSubnetV2.NetworkingSubnetV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.allocationPools">allocationPools</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>[]</code> | allocation_pools block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dnsNameservers">dnsNameservers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.enableDhcp">enableDhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.hostRoutes">hostRoutes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>[]</code> | host_routes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#id NetworkingSubnetV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.ipVersion">ipVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#name NetworkingSubnetV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.noGateway">noGateway</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#region NetworkingSubnetV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}.

---

##### `allocationPools`<sup>Optional</sup> <a name="allocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.allocationPools"></a>

```typescript
public readonly allocationPools: IResolvable | NetworkingSubnetV2AllocationPools[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>[]

allocation_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#allocation_pools NetworkingSubnetV2#allocation_pools}

---

##### `dnsNameservers`<sup>Optional</sup> <a name="dnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dnsNameservers"></a>

```typescript
public readonly dnsNameservers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}.

---

##### `enableDhcp`<sup>Optional</sup> <a name="enableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.enableDhcp"></a>

```typescript
public readonly enableDhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}.

---

##### `gatewayIp`<sup>Optional</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}.

---

##### `hostRoutes`<sup>Optional</sup> <a name="hostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.hostRoutes"></a>

```typescript
public readonly hostRoutes: IResolvable | NetworkingSubnetV2HostRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>[]

host_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#host_routes NetworkingSubnetV2#host_routes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#id NetworkingSubnetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#name NetworkingSubnetV2#name}.

---

##### `noGateway`<sup>Optional</sup> <a name="noGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.noGateway"></a>

```typescript
public readonly noGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#region NetworkingSubnetV2#region}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingSubnetV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#timeouts NetworkingSubnetV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}.

---

### NetworkingSubnetV2HostRoutes <a name="NetworkingSubnetV2HostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

const networkingSubnetV2HostRoutes: networkingSubnetV2.NetworkingSubnetV2HostRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#destination_cidr NetworkingSubnetV2#destination_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.nextHop">nextHop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#next_hop NetworkingSubnetV2#next_hop}. |

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#destination_cidr NetworkingSubnetV2#destination_cidr}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#next_hop NetworkingSubnetV2#next_hop}.

---

### NetworkingSubnetV2Timeouts <a name="NetworkingSubnetV2Timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

const networkingSubnetV2Timeouts: networkingSubnetV2.NetworkingSubnetV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#create NetworkingSubnetV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#delete NetworkingSubnetV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#create NetworkingSubnetV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_subnet_v2#delete NetworkingSubnetV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingSubnetV2AllocationPoolsList <a name="NetworkingSubnetV2AllocationPoolsList" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

new networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get"></a>

```typescript
public get(index: number): NetworkingSubnetV2AllocationPoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingSubnetV2AllocationPools[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>[]

---


### NetworkingSubnetV2AllocationPoolsOutputReference <a name="NetworkingSubnetV2AllocationPoolsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

new networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingSubnetV2AllocationPools;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>

---


### NetworkingSubnetV2HostRoutesList <a name="NetworkingSubnetV2HostRoutesList" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

new networkingSubnetV2.NetworkingSubnetV2HostRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get"></a>

```typescript
public get(index: number): NetworkingSubnetV2HostRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingSubnetV2HostRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>[]

---


### NetworkingSubnetV2HostRoutesOutputReference <a name="NetworkingSubnetV2HostRoutesOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

new networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidrInput">destinationCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHopInput">nextHopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHop">nextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationCidrInput`<sup>Optional</sup> <a name="destinationCidrInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidrInput"></a>

```typescript
public readonly destinationCidrInput: string;
```

- *Type:* string

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHopInput"></a>

```typescript
public readonly nextHopInput: string;
```

- *Type:* string

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingSubnetV2HostRoutes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>

---


### NetworkingSubnetV2TimeoutsOutputReference <a name="NetworkingSubnetV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { networkingSubnetV2 } from '@cdktf/provider-opentelekomcloud'

new networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingSubnetV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

---



