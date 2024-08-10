# `vpcSubnetV1` Submodule <a name="`vpcSubnetV1` Submodule" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSubnetV1 <a name="VpcSubnetV1" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1 opentelekomcloud_vpc_subnet_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer"></a>

```typescript
import { vpcSubnetV1 } from '@cdktf/provider-opentelekomcloud'

new vpcSubnetV1.VpcSubnetV1(scope: Construct, id: string, config: VpcSubnetV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config">VpcSubnetV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config">VpcSubnetV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDhcpEnable">resetDhcpEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDnsList">resetDnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetIpv6Enable">resetIpv6Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetNtpAddresses">resetNtpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetPrimaryDns">resetPrimaryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetSecondaryDns">resetSecondaryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcSubnetV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDhcpEnable` <a name="resetDhcpEnable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDhcpEnable"></a>

```typescript
public resetDhcpEnable(): void
```

##### `resetDnsList` <a name="resetDnsList" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDnsList"></a>

```typescript
public resetDnsList(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6Enable` <a name="resetIpv6Enable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetIpv6Enable"></a>

```typescript
public resetIpv6Enable(): void
```

##### `resetNtpAddresses` <a name="resetNtpAddresses" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetNtpAddresses"></a>

```typescript
public resetNtpAddresses(): void
```

##### `resetPrimaryDns` <a name="resetPrimaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetPrimaryDns"></a>

```typescript
public resetPrimaryDns(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecondaryDns` <a name="resetSecondaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetSecondaryDns"></a>

```typescript
public resetSecondaryDns(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcSubnetV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isConstruct"></a>

```typescript
import { vpcSubnetV1 } from '@cdktf/provider-opentelekomcloud'

vpcSubnetV1.VpcSubnetV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformElement"></a>

```typescript
import { vpcSubnetV1 } from '@cdktf/provider-opentelekomcloud'

vpcSubnetV1.VpcSubnetV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformResource"></a>

```typescript
import { vpcSubnetV1 } from '@cdktf/provider-opentelekomcloud'

vpcSubnetV1.VpcSubnetV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.generateConfigForImport"></a>

```typescript
import { vpcSubnetV1 } from '@cdktf/provider-opentelekomcloud'

vpcSubnetV1.VpcSubnetV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcSubnetV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcSubnetV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcSubnetV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcSubnetV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIpv6">gatewayIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference">VpcSubnetV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dhcpEnableInput">dhcpEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dnsListInput">dnsListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIpInput">gatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ipv6EnableInput">ipv6EnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ntpAddressesInput">ntpAddressesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.primaryDnsInput">primaryDnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.secondaryDnsInput">secondaryDnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dhcpEnable">dhcpEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dnsList">dnsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ipv6Enable">ipv6Enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ntpAddresses">ntpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.primaryDns">primaryDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.secondaryDns">secondaryDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

---

##### `gatewayIpv6`<sup>Required</sup> <a name="gatewayIpv6" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIpv6"></a>

```typescript
public readonly gatewayIpv6: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.timeouts"></a>

```typescript
public readonly timeouts: VpcSubnetV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference">VpcSubnetV1TimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dhcpEnableInput`<sup>Optional</sup> <a name="dhcpEnableInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dhcpEnableInput"></a>

```typescript
public readonly dhcpEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsListInput`<sup>Optional</sup> <a name="dnsListInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dnsListInput"></a>

```typescript
public readonly dnsListInput: string[];
```

- *Type:* string[]

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIpInput"></a>

```typescript
public readonly gatewayIpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6EnableInput`<sup>Optional</sup> <a name="ipv6EnableInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ipv6EnableInput"></a>

```typescript
public readonly ipv6EnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ntpAddressesInput`<sup>Optional</sup> <a name="ntpAddressesInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ntpAddressesInput"></a>

```typescript
public readonly ntpAddressesInput: string;
```

- *Type:* string

---

##### `primaryDnsInput`<sup>Optional</sup> <a name="primaryDnsInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.primaryDnsInput"></a>

```typescript
public readonly primaryDnsInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secondaryDnsInput`<sup>Optional</sup> <a name="secondaryDnsInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.secondaryDnsInput"></a>

```typescript
public readonly secondaryDnsInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcSubnetV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dhcpEnable`<sup>Required</sup> <a name="dhcpEnable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dhcpEnable"></a>

```typescript
public readonly dhcpEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsList`<sup>Required</sup> <a name="dnsList" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dnsList"></a>

```typescript
public readonly dnsList: string[];
```

- *Type:* string[]

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6Enable`<sup>Required</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ipv6Enable"></a>

```typescript
public readonly ipv6Enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ntpAddresses`<sup>Required</sup> <a name="ntpAddresses" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ntpAddresses"></a>

```typescript
public readonly ntpAddresses: string;
```

- *Type:* string

---

##### `primaryDns`<sup>Required</sup> <a name="primaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.primaryDns"></a>

```typescript
public readonly primaryDns: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secondaryDns`<sup>Required</sup> <a name="secondaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.secondaryDns"></a>

```typescript
public readonly secondaryDns: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSubnetV1Config <a name="VpcSubnetV1Config" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.Initializer"></a>

```typescript
import { vpcSubnetV1 } from '@cdktf/provider-opentelekomcloud'

const vpcSubnetV1Config: vpcSubnetV1.VpcSubnetV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#cidr VpcSubnetV1#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#gateway_ip VpcSubnetV1#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#name VpcSubnetV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#vpc_id VpcSubnetV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#availability_zone VpcSubnetV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#description VpcSubnetV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dhcpEnable">dhcpEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#dhcp_enable VpcSubnetV1#dhcp_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dnsList">dnsList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#dns_list VpcSubnetV1#dns_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#id VpcSubnetV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.ipv6Enable">ipv6Enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#ipv6_enable VpcSubnetV1#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.ntpAddresses">ntpAddresses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#ntp_addresses VpcSubnetV1#ntp_addresses}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.primaryDns">primaryDns</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#primary_dns VpcSubnetV1#primary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#region VpcSubnetV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.secondaryDns">secondaryDns</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#secondary_dns VpcSubnetV1#secondary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#tags VpcSubnetV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#cidr VpcSubnetV1#cidr}.

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#gateway_ip VpcSubnetV1#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#name VpcSubnetV1#name}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#vpc_id VpcSubnetV1#vpc_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#availability_zone VpcSubnetV1#availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#description VpcSubnetV1#description}.

---

##### `dhcpEnable`<sup>Optional</sup> <a name="dhcpEnable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dhcpEnable"></a>

```typescript
public readonly dhcpEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#dhcp_enable VpcSubnetV1#dhcp_enable}.

---

##### `dnsList`<sup>Optional</sup> <a name="dnsList" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dnsList"></a>

```typescript
public readonly dnsList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#dns_list VpcSubnetV1#dns_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#id VpcSubnetV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6Enable`<sup>Optional</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.ipv6Enable"></a>

```typescript
public readonly ipv6Enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#ipv6_enable VpcSubnetV1#ipv6_enable}.

---

##### `ntpAddresses`<sup>Optional</sup> <a name="ntpAddresses" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.ntpAddresses"></a>

```typescript
public readonly ntpAddresses: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#ntp_addresses VpcSubnetV1#ntp_addresses}.

---

##### `primaryDns`<sup>Optional</sup> <a name="primaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.primaryDns"></a>

```typescript
public readonly primaryDns: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#primary_dns VpcSubnetV1#primary_dns}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#region VpcSubnetV1#region}.

---

##### `secondaryDns`<sup>Optional</sup> <a name="secondaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.secondaryDns"></a>

```typescript
public readonly secondaryDns: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#secondary_dns VpcSubnetV1#secondary_dns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#tags VpcSubnetV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: VpcSubnetV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#timeouts VpcSubnetV1#timeouts}

---

### VpcSubnetV1Timeouts <a name="VpcSubnetV1Timeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.Initializer"></a>

```typescript
import { vpcSubnetV1 } from '@cdktf/provider-opentelekomcloud'

const vpcSubnetV1Timeouts: vpcSubnetV1.VpcSubnetV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#create VpcSubnetV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#delete VpcSubnetV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#create VpcSubnetV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/resources/vpc_subnet_v1#delete VpcSubnetV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcSubnetV1TimeoutsOutputReference <a name="VpcSubnetV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcSubnetV1 } from '@cdktf/provider-opentelekomcloud'

new vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcSubnetV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a>

---



