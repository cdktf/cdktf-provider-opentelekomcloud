# `dehHostV1` Submodule <a name="`dehHostV1` Submodule" id="@cdktf/provider-opentelekomcloud.dehHostV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DehHostV1 <a name="DehHostV1" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1 opentelekomcloud_deh_host_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

new dehHostV1.DehHostV1(scope: Construct, id: string, config: DehHostV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config">DehHostV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config">DehHostV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities">putAvailableInstanceCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAutoPlacement">resetAutoPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableInstanceCapacities">resetAvailableInstanceCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableMemory">resetAvailableMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableVcpus">resetAvailableVcpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetCores">resetCores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetHostTypeName">resetHostTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceTotal">resetInstanceTotal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceUuids">resetInstanceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetSockets">resetSockets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetVcpus">resetVcpus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailableInstanceCapacities` <a name="putAvailableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities"></a>

```typescript
public putAvailableInstanceCapacities(value: IResolvable | DehHostV1AvailableInstanceCapacities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts"></a>

```typescript
public putTimeouts(value: DehHostV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

---

##### `resetAutoPlacement` <a name="resetAutoPlacement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAutoPlacement"></a>

```typescript
public resetAutoPlacement(): void
```

##### `resetAvailableInstanceCapacities` <a name="resetAvailableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableInstanceCapacities"></a>

```typescript
public resetAvailableInstanceCapacities(): void
```

##### `resetAvailableMemory` <a name="resetAvailableMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableMemory"></a>

```typescript
public resetAvailableMemory(): void
```

##### `resetAvailableVcpus` <a name="resetAvailableVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableVcpus"></a>

```typescript
public resetAvailableVcpus(): void
```

##### `resetCores` <a name="resetCores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetCores"></a>

```typescript
public resetCores(): void
```

##### `resetHostTypeName` <a name="resetHostTypeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetHostTypeName"></a>

```typescript
public resetHostTypeName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceTotal` <a name="resetInstanceTotal" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceTotal"></a>

```typescript
public resetInstanceTotal(): void
```

##### `resetInstanceUuids` <a name="resetInstanceUuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceUuids"></a>

```typescript
public resetInstanceUuids(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSockets` <a name="resetSockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetSockets"></a>

```typescript
public resetSockets(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVcpus` <a name="resetVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetVcpus"></a>

```typescript
public resetVcpus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DehHostV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

dehHostV1.DehHostV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

dehHostV1.DehHostV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

dehHostV1.DehHostV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

dehHostV1.DehHostV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DehHostV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DehHostV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DehHostV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DehHostV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacities">availableInstanceCapacities</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList">DehHostV1AvailableInstanceCapacitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference">DehHostV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacementInput">autoPlacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacitiesInput">availableInstanceCapacitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemoryInput">availableMemoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpusInput">availableVcpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.coresInput">coresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeInput">hostTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeNameInput">hostTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotalInput">instanceTotalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuidsInput">instanceUuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.socketsInput">socketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpusInput">vcpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacement">autoPlacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemory">availableMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpus">availableVcpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cores">cores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostType">hostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeName">hostTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotal">instanceTotal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuids">instanceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.sockets">sockets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpus">vcpus</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availableInstanceCapacities`<sup>Required</sup> <a name="availableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacities"></a>

```typescript
public readonly availableInstanceCapacities: DehHostV1AvailableInstanceCapacitiesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList">DehHostV1AvailableInstanceCapacitiesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeouts"></a>

```typescript
public readonly timeouts: DehHostV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference">DehHostV1TimeoutsOutputReference</a>

---

##### `autoPlacementInput`<sup>Optional</sup> <a name="autoPlacementInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacementInput"></a>

```typescript
public readonly autoPlacementInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `availableInstanceCapacitiesInput`<sup>Optional</sup> <a name="availableInstanceCapacitiesInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacitiesInput"></a>

```typescript
public readonly availableInstanceCapacitiesInput: IResolvable | DehHostV1AvailableInstanceCapacities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>[]

---

##### `availableMemoryInput`<sup>Optional</sup> <a name="availableMemoryInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemoryInput"></a>

```typescript
public readonly availableMemoryInput: number;
```

- *Type:* number

---

##### `availableVcpusInput`<sup>Optional</sup> <a name="availableVcpusInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpusInput"></a>

```typescript
public readonly availableVcpusInput: number;
```

- *Type:* number

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.coresInput"></a>

```typescript
public readonly coresInput: number;
```

- *Type:* number

---

##### `hostTypeInput`<sup>Optional</sup> <a name="hostTypeInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeInput"></a>

```typescript
public readonly hostTypeInput: string;
```

- *Type:* string

---

##### `hostTypeNameInput`<sup>Optional</sup> <a name="hostTypeNameInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeNameInput"></a>

```typescript
public readonly hostTypeNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTotalInput`<sup>Optional</sup> <a name="instanceTotalInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotalInput"></a>

```typescript
public readonly instanceTotalInput: number;
```

- *Type:* number

---

##### `instanceUuidsInput`<sup>Optional</sup> <a name="instanceUuidsInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuidsInput"></a>

```typescript
public readonly instanceUuidsInput: string[];
```

- *Type:* string[]

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `socketsInput`<sup>Optional</sup> <a name="socketsInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.socketsInput"></a>

```typescript
public readonly socketsInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DehHostV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

---

##### `vcpusInput`<sup>Optional</sup> <a name="vcpusInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpusInput"></a>

```typescript
public readonly vcpusInput: number;
```

- *Type:* number

---

##### `autoPlacement`<sup>Required</sup> <a name="autoPlacement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacement"></a>

```typescript
public readonly autoPlacement: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availableMemory`<sup>Required</sup> <a name="availableMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemory"></a>

```typescript
public readonly availableMemory: number;
```

- *Type:* number

---

##### `availableVcpus`<sup>Required</sup> <a name="availableVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpus"></a>

```typescript
public readonly availableVcpus: number;
```

- *Type:* number

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostType"></a>

```typescript
public readonly hostType: string;
```

- *Type:* string

---

##### `hostTypeName`<sup>Required</sup> <a name="hostTypeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeName"></a>

```typescript
public readonly hostTypeName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceTotal`<sup>Required</sup> <a name="instanceTotal" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotal"></a>

```typescript
public readonly instanceTotal: number;
```

- *Type:* number

---

##### `instanceUuids`<sup>Required</sup> <a name="instanceUuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuids"></a>

```typescript
public readonly instanceUuids: string[];
```

- *Type:* string[]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sockets`<sup>Required</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.sockets"></a>

```typescript
public readonly sockets: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DehHostV1AvailableInstanceCapacities <a name="DehHostV1AvailableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities.Initializer"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

const dehHostV1AvailableInstanceCapacities: dehHostV1.DehHostV1AvailableInstanceCapacities = { ... }
```


### DehHostV1Config <a name="DehHostV1Config" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.Initializer"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

const dehHostV1Config: dehHostV1.DehHostV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostType">hostType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#host_type DehHostV1#host_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#name DehHostV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.autoPlacement">autoPlacement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableInstanceCapacities">availableInstanceCapacities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>[]</code> | available_instance_capacities block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableMemory">availableMemory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableVcpus">availableVcpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.cores">cores</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#cores DehHostV1#cores}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostTypeName">hostTypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#id DehHostV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceTotal">instanceTotal</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceUuids">instanceUuids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.memory">memory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#memory DehHostV1#memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#region DehHostV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.sockets">sockets</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#sockets DehHostV1#sockets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#status DehHostV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#tags DehHostV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.vcpus">vcpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}.

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostType"></a>

```typescript
public readonly hostType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#host_type DehHostV1#host_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#name DehHostV1#name}.

---

##### `autoPlacement`<sup>Optional</sup> <a name="autoPlacement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.autoPlacement"></a>

```typescript
public readonly autoPlacement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}.

---

##### `availableInstanceCapacities`<sup>Optional</sup> <a name="availableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableInstanceCapacities"></a>

```typescript
public readonly availableInstanceCapacities: IResolvable | DehHostV1AvailableInstanceCapacities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>[]

available_instance_capacities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#available_instance_capacities DehHostV1#available_instance_capacities}

---

##### `availableMemory`<sup>Optional</sup> <a name="availableMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableMemory"></a>

```typescript
public readonly availableMemory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}.

---

##### `availableVcpus`<sup>Optional</sup> <a name="availableVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableVcpus"></a>

```typescript
public readonly availableVcpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#cores DehHostV1#cores}.

---

##### `hostTypeName`<sup>Optional</sup> <a name="hostTypeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostTypeName"></a>

```typescript
public readonly hostTypeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#id DehHostV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTotal`<sup>Optional</sup> <a name="instanceTotal" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceTotal"></a>

```typescript
public readonly instanceTotal: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}.

---

##### `instanceUuids`<sup>Optional</sup> <a name="instanceUuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceUuids"></a>

```typescript
public readonly instanceUuids: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#memory DehHostV1#memory}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#region DehHostV1#region}.

---

##### `sockets`<sup>Optional</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.sockets"></a>

```typescript
public readonly sockets: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#sockets DehHostV1#sockets}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#status DehHostV1#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#tags DehHostV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: DehHostV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#timeouts DehHostV1#timeouts}

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}.

---

### DehHostV1Timeouts <a name="DehHostV1Timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.Initializer"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

const dehHostV1Timeouts: dehHostV1.DehHostV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#create DehHostV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#delete DehHostV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#create DehHostV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/deh_host_v1#delete DehHostV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DehHostV1AvailableInstanceCapacitiesList <a name="DehHostV1AvailableInstanceCapacitiesList" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

new dehHostV1.DehHostV1AvailableInstanceCapacitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get"></a>

```typescript
public get(index: number): DehHostV1AvailableInstanceCapacitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DehHostV1AvailableInstanceCapacities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>[]

---


### DehHostV1AvailableInstanceCapacitiesOutputReference <a name="DehHostV1AvailableInstanceCapacitiesOutputReference" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

new dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DehHostV1AvailableInstanceCapacities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>

---


### DehHostV1TimeoutsOutputReference <a name="DehHostV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { dehHostV1 } from '@cdktf/provider-opentelekomcloud'

new dehHostV1.DehHostV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DehHostV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

---



