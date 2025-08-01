# `fgsFunctionV2` Submodule <a name="`fgsFunctionV2` Submodule" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FgsFunctionV2 <a name="FgsFunctionV2" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2 opentelekomcloud_fgs_function_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2(scope: Construct, id: string, config: FgsFunctionV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config">FgsFunctionV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config">FgsFunctionV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage">putCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts">putFuncMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController">putNetworkController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances">putReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAgency">resetAgency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetApp">resetApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAppAgency">resetAppAgency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeFilename">resetCodeFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeType">resetCodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeUrl">resetCodeUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetConcurrencyNum">resetConcurrencyNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCustomImage">resetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDependList">resetDependList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableDynamicMemory">resetEnableDynamicMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEncryptedUserData">resetEncryptedUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncCode">resetFuncCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncMounts">resetFuncMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFunctiongraphVersion">resetFunctiongraphVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetGpuMemory">resetGpuMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerHandler">resetInitializerHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerTimeout">resetInitializerTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicId">resetLogTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicName">resetLogTopicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMaxInstanceNum">resetMaxInstanceNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserGroupId">resetMountUserGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserId">resetMountUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkController">resetNetworkController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPeeringCidr">resetPeeringCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopHandler">resetPreStopHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopTimeout">resetPreStopTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetReservedInstances">resetReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVersions">resetVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomImage` <a name="putCustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage"></a>

```typescript
public putCustomImage(value: FgsFunctionV2CustomImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

---

##### `putFuncMounts` <a name="putFuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts"></a>

```typescript
public putFuncMounts(value: IResolvable | FgsFunctionV2FuncMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]

---

##### `putNetworkController` <a name="putNetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController"></a>

```typescript
public putNetworkController(value: FgsFunctionV2NetworkController): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

---

##### `putReservedInstances` <a name="putReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances"></a>

```typescript
public putReservedInstances(value: IResolvable | FgsFunctionV2ReservedInstances[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts"></a>

```typescript
public putTimeouts(value: FgsFunctionV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

---

##### `putVersions` <a name="putVersions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions"></a>

```typescript
public putVersions(value: IResolvable | FgsFunctionV2Versions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]

---

##### `resetAgency` <a name="resetAgency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAgency"></a>

```typescript
public resetAgency(): void
```

##### `resetApp` <a name="resetApp" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetApp"></a>

```typescript
public resetApp(): void
```

##### `resetAppAgency` <a name="resetAppAgency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAppAgency"></a>

```typescript
public resetAppAgency(): void
```

##### `resetCodeFilename` <a name="resetCodeFilename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeFilename"></a>

```typescript
public resetCodeFilename(): void
```

##### `resetCodeType` <a name="resetCodeType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeType"></a>

```typescript
public resetCodeType(): void
```

##### `resetCodeUrl` <a name="resetCodeUrl" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeUrl"></a>

```typescript
public resetCodeUrl(): void
```

##### `resetConcurrencyNum` <a name="resetConcurrencyNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetConcurrencyNum"></a>

```typescript
public resetConcurrencyNum(): void
```

##### `resetCustomImage` <a name="resetCustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCustomImage"></a>

```typescript
public resetCustomImage(): void
```

##### `resetDependList` <a name="resetDependList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDependList"></a>

```typescript
public resetDependList(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableDynamicMemory` <a name="resetEnableDynamicMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableDynamicMemory"></a>

```typescript
public resetEnableDynamicMemory(): void
```

##### `resetEncryptedUserData` <a name="resetEncryptedUserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEncryptedUserData"></a>

```typescript
public resetEncryptedUserData(): void
```

##### `resetFuncCode` <a name="resetFuncCode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncCode"></a>

```typescript
public resetFuncCode(): void
```

##### `resetFuncMounts` <a name="resetFuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncMounts"></a>

```typescript
public resetFuncMounts(): void
```

##### `resetFunctiongraphVersion` <a name="resetFunctiongraphVersion" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFunctiongraphVersion"></a>

```typescript
public resetFunctiongraphVersion(): void
```

##### `resetGpuMemory` <a name="resetGpuMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetGpuMemory"></a>

```typescript
public resetGpuMemory(): void
```

##### `resetHandler` <a name="resetHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHandler"></a>

```typescript
public resetHandler(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitializerHandler` <a name="resetInitializerHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerHandler"></a>

```typescript
public resetInitializerHandler(): void
```

##### `resetInitializerTimeout` <a name="resetInitializerTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerTimeout"></a>

```typescript
public resetInitializerTimeout(): void
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupId"></a>

```typescript
public resetLogGroupId(): void
```

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```

##### `resetLogTopicId` <a name="resetLogTopicId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicId"></a>

```typescript
public resetLogTopicId(): void
```

##### `resetLogTopicName` <a name="resetLogTopicName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicName"></a>

```typescript
public resetLogTopicName(): void
```

##### `resetMaxInstanceNum` <a name="resetMaxInstanceNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMaxInstanceNum"></a>

```typescript
public resetMaxInstanceNum(): void
```

##### `resetMountUserGroupId` <a name="resetMountUserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserGroupId"></a>

```typescript
public resetMountUserGroupId(): void
```

##### `resetMountUserId` <a name="resetMountUserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserId"></a>

```typescript
public resetMountUserId(): void
```

##### `resetNetworkController` <a name="resetNetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkController"></a>

```typescript
public resetNetworkController(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetPeeringCidr` <a name="resetPeeringCidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPeeringCidr"></a>

```typescript
public resetPeeringCidr(): void
```

##### `resetPreStopHandler` <a name="resetPreStopHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopHandler"></a>

```typescript
public resetPreStopHandler(): void
```

##### `resetPreStopTimeout` <a name="resetPreStopTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopTimeout"></a>

```typescript
public resetPreStopTimeout(): void
```

##### `resetReservedInstances` <a name="resetReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetReservedInstances"></a>

```typescript
public resetReservedInstances(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetVersions` <a name="resetVersions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVersions"></a>

```typescript
public resetVersions(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FgsFunctionV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

fgsFunctionV2.FgsFunctionV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

fgsFunctionV2.FgsFunctionV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

fgsFunctionV2.FgsFunctionV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

fgsFunctionV2.FgsFunctionV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FgsFunctionV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FgsFunctionV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FgsFunctionV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FgsFunctionV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.allowEphemeralStorage">allowEphemeralStorage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.apigRouteEnable">apigRouteEnable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImage">customImage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference">FgsFunctionV2CustomImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsList">dnsList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeader">enableAuthInHeader</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolation">enableClassIsolation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorage">ephemeralStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.extendConfig">extendConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMounts">funcMounts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList">FgsFunctionV2FuncMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuType">gpuType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandler">heartbeatHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.isStatefulFunction">isStatefulFunction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkController">networkController</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference">FgsFunctionV2NetworkControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstances">reservedInstances</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList">FgsFunctionV2ReservedInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference">FgsFunctionV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList">FgsFunctionV2VersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agencyInput">agencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgencyInput">appAgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilenameInput">codeFilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeTypeInput">codeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrlInput">codeUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNumInput">concurrencyNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImageInput">customImageInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependListInput">dependListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemoryInput">enableDynamicMemoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserDataInput">encryptedUserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCodeInput">funcCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMountsInput">funcMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersionInput">functiongraphVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemoryInput">gpuMemoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handlerInput">handlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandlerInput">initializerHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeoutInput">initializerTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicIdInput">logTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicNameInput">logTopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNumInput">maxInstanceNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySizeInput">memorySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupIdInput">mountUserGroupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserIdInput">mountUserIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkControllerInput">networkControllerInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidrInput">peeringCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandlerInput">preStopHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeoutInput">preStopTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstancesInput">reservedInstancesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versionsInput">versionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agency">agency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgency">appAgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilename">codeFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeType">codeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrl">codeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNum">concurrencyNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependList">dependList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemory">enableDynamicMemory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserData">encryptedUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCode">funcCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersion">functiongraphVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemory">gpuMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandler">initializerHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeout">initializerTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicId">logTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicName">logTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNum">maxInstanceNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupId">mountUserGroupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserId">mountUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidr">peeringCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandler">preStopHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeout">preStopTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowEphemeralStorage`<sup>Required</sup> <a name="allowEphemeralStorage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.allowEphemeralStorage"></a>

```typescript
public readonly allowEphemeralStorage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `apigRouteEnable`<sup>Required</sup> <a name="apigRouteEnable" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.apigRouteEnable"></a>

```typescript
public readonly apigRouteEnable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `customImage`<sup>Required</sup> <a name="customImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImage"></a>

```typescript
public readonly customImage: FgsFunctionV2CustomImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference">FgsFunctionV2CustomImageOutputReference</a>

---

##### `dnsList`<sup>Required</sup> <a name="dnsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsList"></a>

```typescript
public readonly dnsList: string;
```

- *Type:* string

---

##### `enableAuthInHeader`<sup>Required</sup> <a name="enableAuthInHeader" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeader"></a>

```typescript
public readonly enableAuthInHeader: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableClassIsolation`<sup>Required</sup> <a name="enableClassIsolation" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolation"></a>

```typescript
public readonly enableClassIsolation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: number;
```

- *Type:* number

---

##### `extendConfig`<sup>Required</sup> <a name="extendConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.extendConfig"></a>

```typescript
public readonly extendConfig: string;
```

- *Type:* string

---

##### `funcMounts`<sup>Required</sup> <a name="funcMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMounts"></a>

```typescript
public readonly funcMounts: FgsFunctionV2FuncMountsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList">FgsFunctionV2FuncMountsList</a>

---

##### `gpuType`<sup>Required</sup> <a name="gpuType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuType"></a>

```typescript
public readonly gpuType: string;
```

- *Type:* string

---

##### `heartbeatHandler`<sup>Required</sup> <a name="heartbeatHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandler"></a>

```typescript
public readonly heartbeatHandler: string;
```

- *Type:* string

---

##### `isStatefulFunction`<sup>Required</sup> <a name="isStatefulFunction" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.isStatefulFunction"></a>

```typescript
public readonly isStatefulFunction: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkController`<sup>Required</sup> <a name="networkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkController"></a>

```typescript
public readonly networkController: FgsFunctionV2NetworkControllerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference">FgsFunctionV2NetworkControllerOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `reservedInstances`<sup>Required</sup> <a name="reservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstances"></a>

```typescript
public readonly reservedInstances: FgsFunctionV2ReservedInstancesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList">FgsFunctionV2ReservedInstancesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeouts"></a>

```typescript
public readonly timeouts: FgsFunctionV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference">FgsFunctionV2TimeoutsOutputReference</a>

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versions"></a>

```typescript
public readonly versions: FgsFunctionV2VersionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList">FgsFunctionV2VersionsList</a>

---

##### `agencyInput`<sup>Optional</sup> <a name="agencyInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agencyInput"></a>

```typescript
public readonly agencyInput: string;
```

- *Type:* string

---

##### `appAgencyInput`<sup>Optional</sup> <a name="appAgencyInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgencyInput"></a>

```typescript
public readonly appAgencyInput: string;
```

- *Type:* string

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `codeFilenameInput`<sup>Optional</sup> <a name="codeFilenameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilenameInput"></a>

```typescript
public readonly codeFilenameInput: string;
```

- *Type:* string

---

##### `codeTypeInput`<sup>Optional</sup> <a name="codeTypeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeTypeInput"></a>

```typescript
public readonly codeTypeInput: string;
```

- *Type:* string

---

##### `codeUrlInput`<sup>Optional</sup> <a name="codeUrlInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrlInput"></a>

```typescript
public readonly codeUrlInput: string;
```

- *Type:* string

---

##### `concurrencyNumInput`<sup>Optional</sup> <a name="concurrencyNumInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNumInput"></a>

```typescript
public readonly concurrencyNumInput: number;
```

- *Type:* number

---

##### `customImageInput`<sup>Optional</sup> <a name="customImageInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImageInput"></a>

```typescript
public readonly customImageInput: FgsFunctionV2CustomImage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

---

##### `dependListInput`<sup>Optional</sup> <a name="dependListInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependListInput"></a>

```typescript
public readonly dependListInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableDynamicMemoryInput`<sup>Optional</sup> <a name="enableDynamicMemoryInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemoryInput"></a>

```typescript
public readonly enableDynamicMemoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptedUserDataInput`<sup>Optional</sup> <a name="encryptedUserDataInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserDataInput"></a>

```typescript
public readonly encryptedUserDataInput: string;
```

- *Type:* string

---

##### `funcCodeInput`<sup>Optional</sup> <a name="funcCodeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCodeInput"></a>

```typescript
public readonly funcCodeInput: string;
```

- *Type:* string

---

##### `funcMountsInput`<sup>Optional</sup> <a name="funcMountsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMountsInput"></a>

```typescript
public readonly funcMountsInput: IResolvable | FgsFunctionV2FuncMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]

---

##### `functiongraphVersionInput`<sup>Optional</sup> <a name="functiongraphVersionInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersionInput"></a>

```typescript
public readonly functiongraphVersionInput: string;
```

- *Type:* string

---

##### `gpuMemoryInput`<sup>Optional</sup> <a name="gpuMemoryInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemoryInput"></a>

```typescript
public readonly gpuMemoryInput: number;
```

- *Type:* number

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handlerInput"></a>

```typescript
public readonly handlerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initializerHandlerInput`<sup>Optional</sup> <a name="initializerHandlerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandlerInput"></a>

```typescript
public readonly initializerHandlerInput: string;
```

- *Type:* string

---

##### `initializerTimeoutInput`<sup>Optional</sup> <a name="initializerTimeoutInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeoutInput"></a>

```typescript
public readonly initializerTimeoutInput: number;
```

- *Type:* number

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `logTopicIdInput`<sup>Optional</sup> <a name="logTopicIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicIdInput"></a>

```typescript
public readonly logTopicIdInput: string;
```

- *Type:* string

---

##### `logTopicNameInput`<sup>Optional</sup> <a name="logTopicNameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicNameInput"></a>

```typescript
public readonly logTopicNameInput: string;
```

- *Type:* string

---

##### `maxInstanceNumInput`<sup>Optional</sup> <a name="maxInstanceNumInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNumInput"></a>

```typescript
public readonly maxInstanceNumInput: string;
```

- *Type:* string

---

##### `memorySizeInput`<sup>Optional</sup> <a name="memorySizeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySizeInput"></a>

```typescript
public readonly memorySizeInput: number;
```

- *Type:* number

---

##### `mountUserGroupIdInput`<sup>Optional</sup> <a name="mountUserGroupIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupIdInput"></a>

```typescript
public readonly mountUserGroupIdInput: number;
```

- *Type:* number

---

##### `mountUserIdInput`<sup>Optional</sup> <a name="mountUserIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserIdInput"></a>

```typescript
public readonly mountUserIdInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkControllerInput`<sup>Optional</sup> <a name="networkControllerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkControllerInput"></a>

```typescript
public readonly networkControllerInput: FgsFunctionV2NetworkController;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `peeringCidrInput`<sup>Optional</sup> <a name="peeringCidrInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidrInput"></a>

```typescript
public readonly peeringCidrInput: string;
```

- *Type:* string

---

##### `preStopHandlerInput`<sup>Optional</sup> <a name="preStopHandlerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandlerInput"></a>

```typescript
public readonly preStopHandlerInput: string;
```

- *Type:* string

---

##### `preStopTimeoutInput`<sup>Optional</sup> <a name="preStopTimeoutInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeoutInput"></a>

```typescript
public readonly preStopTimeoutInput: number;
```

- *Type:* number

---

##### `reservedInstancesInput`<sup>Optional</sup> <a name="reservedInstancesInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstancesInput"></a>

```typescript
public readonly reservedInstancesInput: IResolvable | FgsFunctionV2ReservedInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FgsFunctionV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versionsInput"></a>

```typescript
public readonly versionsInput: IResolvable | FgsFunctionV2Versions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `agency`<sup>Required</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agency"></a>

```typescript
public readonly agency: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `appAgency`<sup>Required</sup> <a name="appAgency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgency"></a>

```typescript
public readonly appAgency: string;
```

- *Type:* string

---

##### `codeFilename`<sup>Required</sup> <a name="codeFilename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilename"></a>

```typescript
public readonly codeFilename: string;
```

- *Type:* string

---

##### `codeType`<sup>Required</sup> <a name="codeType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeType"></a>

```typescript
public readonly codeType: string;
```

- *Type:* string

---

##### `codeUrl`<sup>Required</sup> <a name="codeUrl" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrl"></a>

```typescript
public readonly codeUrl: string;
```

- *Type:* string

---

##### `concurrencyNum`<sup>Required</sup> <a name="concurrencyNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNum"></a>

```typescript
public readonly concurrencyNum: number;
```

- *Type:* number

---

##### `dependList`<sup>Required</sup> <a name="dependList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependList"></a>

```typescript
public readonly dependList: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableDynamicMemory`<sup>Required</sup> <a name="enableDynamicMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemory"></a>

```typescript
public readonly enableDynamicMemory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptedUserData`<sup>Required</sup> <a name="encryptedUserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserData"></a>

```typescript
public readonly encryptedUserData: string;
```

- *Type:* string

---

##### `funcCode`<sup>Required</sup> <a name="funcCode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCode"></a>

```typescript
public readonly funcCode: string;
```

- *Type:* string

---

##### `functiongraphVersion`<sup>Required</sup> <a name="functiongraphVersion" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersion"></a>

```typescript
public readonly functiongraphVersion: string;
```

- *Type:* string

---

##### `gpuMemory`<sup>Required</sup> <a name="gpuMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemory"></a>

```typescript
public readonly gpuMemory: number;
```

- *Type:* number

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initializerHandler`<sup>Required</sup> <a name="initializerHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandler"></a>

```typescript
public readonly initializerHandler: string;
```

- *Type:* string

---

##### `initializerTimeout`<sup>Required</sup> <a name="initializerTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeout"></a>

```typescript
public readonly initializerTimeout: number;
```

- *Type:* number

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logTopicId`<sup>Required</sup> <a name="logTopicId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicId"></a>

```typescript
public readonly logTopicId: string;
```

- *Type:* string

---

##### `logTopicName`<sup>Required</sup> <a name="logTopicName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicName"></a>

```typescript
public readonly logTopicName: string;
```

- *Type:* string

---

##### `maxInstanceNum`<sup>Required</sup> <a name="maxInstanceNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNum"></a>

```typescript
public readonly maxInstanceNum: string;
```

- *Type:* string

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `mountUserGroupId`<sup>Required</sup> <a name="mountUserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupId"></a>

```typescript
public readonly mountUserGroupId: number;
```

- *Type:* number

---

##### `mountUserId`<sup>Required</sup> <a name="mountUserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserId"></a>

```typescript
public readonly mountUserId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `peeringCidr`<sup>Required</sup> <a name="peeringCidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidr"></a>

```typescript
public readonly peeringCidr: string;
```

- *Type:* string

---

##### `preStopHandler`<sup>Required</sup> <a name="preStopHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandler"></a>

```typescript
public readonly preStopHandler: string;
```

- *Type:* string

---

##### `preStopTimeout`<sup>Required</sup> <a name="preStopTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeout"></a>

```typescript
public readonly preStopTimeout: number;
```

- *Type:* number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FgsFunctionV2Config <a name="FgsFunctionV2Config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2Config: fgsFunctionV2.FgsFunctionV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.memorySize">memorySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#memory_size FgsFunctionV2#memory_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#runtime FgsFunctionV2#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#timeout FgsFunctionV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.agency">agency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#agency FgsFunctionV2#agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.app">app</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#app FgsFunctionV2#app}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.appAgency">appAgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#app_agency FgsFunctionV2#app_agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeFilename">codeFilename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#code_filename FgsFunctionV2#code_filename}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeType">codeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#code_type FgsFunctionV2#code_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeUrl">codeUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#code_url FgsFunctionV2#code_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.concurrencyNum">concurrencyNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#concurrency_num FgsFunctionV2#concurrency_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.customImage">customImage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | custom_image block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependList">dependList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#depend_list FgsFunctionV2#depend_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableDynamicMemory">enableDynamicMemory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#enable_dynamic_memory FgsFunctionV2#enable_dynamic_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.encryptedUserData">encryptedUserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#encrypted_user_data FgsFunctionV2#encrypted_user_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcCode">funcCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#func_code FgsFunctionV2#func_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcMounts">funcMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]</code> | func_mounts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.functiongraphVersion">functiongraphVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#functiongraph_version FgsFunctionV2#functiongraph_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.gpuMemory">gpuMemory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#gpu_memory FgsFunctionV2#gpu_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.handler">handler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#handler FgsFunctionV2#handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#id FgsFunctionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerHandler">initializerHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#initializer_handler FgsFunctionV2#initializer_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerTimeout">initializerTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#initializer_timeout FgsFunctionV2#initializer_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#log_group_id FgsFunctionV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#log_group_name FgsFunctionV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicId">logTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#log_topic_id FgsFunctionV2#log_topic_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicName">logTopicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#log_topic_name FgsFunctionV2#log_topic_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.maxInstanceNum">maxInstanceNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#max_instance_num FgsFunctionV2#max_instance_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserGroupId">mountUserGroupId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_user_group_id FgsFunctionV2#mount_user_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserId">mountUserId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_user_id FgsFunctionV2#mount_user_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkController">networkController</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | network_controller block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#network_id FgsFunctionV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.peeringCidr">peeringCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#peering_cidr FgsFunctionV2#peering_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopHandler">preStopHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#pre_stop_handler FgsFunctionV2#pre_stop_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopTimeout">preStopTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#pre_stop_timeout FgsFunctionV2#pre_stop_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.reservedInstances">reservedInstances</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]</code> | reserved_instances block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#tags FgsFunctionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#user_data FgsFunctionV2#user_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.versions">versions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]</code> | versions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#memory_size FgsFunctionV2#memory_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#runtime FgsFunctionV2#runtime}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#timeout FgsFunctionV2#timeout}.

---

##### `agency`<sup>Optional</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.agency"></a>

```typescript
public readonly agency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#agency FgsFunctionV2#agency}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#app FgsFunctionV2#app}.

---

##### `appAgency`<sup>Optional</sup> <a name="appAgency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.appAgency"></a>

```typescript
public readonly appAgency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#app_agency FgsFunctionV2#app_agency}.

---

##### `codeFilename`<sup>Optional</sup> <a name="codeFilename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeFilename"></a>

```typescript
public readonly codeFilename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#code_filename FgsFunctionV2#code_filename}.

---

##### `codeType`<sup>Optional</sup> <a name="codeType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeType"></a>

```typescript
public readonly codeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#code_type FgsFunctionV2#code_type}.

---

##### `codeUrl`<sup>Optional</sup> <a name="codeUrl" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeUrl"></a>

```typescript
public readonly codeUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#code_url FgsFunctionV2#code_url}.

---

##### `concurrencyNum`<sup>Optional</sup> <a name="concurrencyNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.concurrencyNum"></a>

```typescript
public readonly concurrencyNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#concurrency_num FgsFunctionV2#concurrency_num}.

---

##### `customImage`<sup>Optional</sup> <a name="customImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.customImage"></a>

```typescript
public readonly customImage: FgsFunctionV2CustomImage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#custom_image FgsFunctionV2#custom_image}

---

##### `dependList`<sup>Optional</sup> <a name="dependList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependList"></a>

```typescript
public readonly dependList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#depend_list FgsFunctionV2#depend_list}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

##### `enableDynamicMemory`<sup>Optional</sup> <a name="enableDynamicMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableDynamicMemory"></a>

```typescript
public readonly enableDynamicMemory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#enable_dynamic_memory FgsFunctionV2#enable_dynamic_memory}.

---

##### `encryptedUserData`<sup>Optional</sup> <a name="encryptedUserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.encryptedUserData"></a>

```typescript
public readonly encryptedUserData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#encrypted_user_data FgsFunctionV2#encrypted_user_data}.

---

##### `funcCode`<sup>Optional</sup> <a name="funcCode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcCode"></a>

```typescript
public readonly funcCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#func_code FgsFunctionV2#func_code}.

---

##### `funcMounts`<sup>Optional</sup> <a name="funcMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcMounts"></a>

```typescript
public readonly funcMounts: IResolvable | FgsFunctionV2FuncMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]

func_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#func_mounts FgsFunctionV2#func_mounts}

---

##### `functiongraphVersion`<sup>Optional</sup> <a name="functiongraphVersion" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.functiongraphVersion"></a>

```typescript
public readonly functiongraphVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#functiongraph_version FgsFunctionV2#functiongraph_version}.

---

##### `gpuMemory`<sup>Optional</sup> <a name="gpuMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.gpuMemory"></a>

```typescript
public readonly gpuMemory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#gpu_memory FgsFunctionV2#gpu_memory}.

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#handler FgsFunctionV2#handler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#id FgsFunctionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initializerHandler`<sup>Optional</sup> <a name="initializerHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerHandler"></a>

```typescript
public readonly initializerHandler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#initializer_handler FgsFunctionV2#initializer_handler}.

---

##### `initializerTimeout`<sup>Optional</sup> <a name="initializerTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerTimeout"></a>

```typescript
public readonly initializerTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#initializer_timeout FgsFunctionV2#initializer_timeout}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#log_group_id FgsFunctionV2#log_group_id}.

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#log_group_name FgsFunctionV2#log_group_name}.

---

##### `logTopicId`<sup>Optional</sup> <a name="logTopicId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicId"></a>

```typescript
public readonly logTopicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#log_topic_id FgsFunctionV2#log_topic_id}.

---

##### `logTopicName`<sup>Optional</sup> <a name="logTopicName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicName"></a>

```typescript
public readonly logTopicName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#log_topic_name FgsFunctionV2#log_topic_name}.

---

##### `maxInstanceNum`<sup>Optional</sup> <a name="maxInstanceNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.maxInstanceNum"></a>

```typescript
public readonly maxInstanceNum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#max_instance_num FgsFunctionV2#max_instance_num}.

---

##### `mountUserGroupId`<sup>Optional</sup> <a name="mountUserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserGroupId"></a>

```typescript
public readonly mountUserGroupId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_user_group_id FgsFunctionV2#mount_user_group_id}.

---

##### `mountUserId`<sup>Optional</sup> <a name="mountUserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserId"></a>

```typescript
public readonly mountUserId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_user_id FgsFunctionV2#mount_user_id}.

---

##### `networkController`<sup>Optional</sup> <a name="networkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkController"></a>

```typescript
public readonly networkController: FgsFunctionV2NetworkController;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

network_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#network_controller FgsFunctionV2#network_controller}

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#network_id FgsFunctionV2#network_id}.

---

##### `peeringCidr`<sup>Optional</sup> <a name="peeringCidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.peeringCidr"></a>

```typescript
public readonly peeringCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#peering_cidr FgsFunctionV2#peering_cidr}.

---

##### `preStopHandler`<sup>Optional</sup> <a name="preStopHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopHandler"></a>

```typescript
public readonly preStopHandler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#pre_stop_handler FgsFunctionV2#pre_stop_handler}.

---

##### `preStopTimeout`<sup>Optional</sup> <a name="preStopTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopTimeout"></a>

```typescript
public readonly preStopTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#pre_stop_timeout FgsFunctionV2#pre_stop_timeout}.

---

##### `reservedInstances`<sup>Optional</sup> <a name="reservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.reservedInstances"></a>

```typescript
public readonly reservedInstances: IResolvable | FgsFunctionV2ReservedInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]

reserved_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#reserved_instances FgsFunctionV2#reserved_instances}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#tags FgsFunctionV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: FgsFunctionV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#timeouts FgsFunctionV2#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#user_data FgsFunctionV2#user_data}.

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.versions"></a>

```typescript
public readonly versions: IResolvable | FgsFunctionV2Versions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#versions FgsFunctionV2#versions}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}.

---

### FgsFunctionV2CustomImage <a name="FgsFunctionV2CustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2CustomImage: fgsFunctionV2.FgsFunctionV2CustomImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#url FgsFunctionV2#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.args">args</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#args FgsFunctionV2#args}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.command">command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#command FgsFunctionV2#command}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.workingDir">workingDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#working_dir FgsFunctionV2#working_dir}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#url FgsFunctionV2#url}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#args FgsFunctionV2#args}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#command FgsFunctionV2#command}.

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#working_dir FgsFunctionV2#working_dir}.

---

### FgsFunctionV2FuncMounts <a name="FgsFunctionV2FuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2FuncMounts: fgsFunctionV2.FgsFunctionV2FuncMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.localMountPath">localMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#local_mount_path FgsFunctionV2#local_mount_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountResource">mountResource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_resource FgsFunctionV2#mount_resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountSharePath">mountSharePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_share_path FgsFunctionV2#mount_share_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountType">mountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_type FgsFunctionV2#mount_type}. |

---

##### `localMountPath`<sup>Required</sup> <a name="localMountPath" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.localMountPath"></a>

```typescript
public readonly localMountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#local_mount_path FgsFunctionV2#local_mount_path}.

---

##### `mountResource`<sup>Required</sup> <a name="mountResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountResource"></a>

```typescript
public readonly mountResource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_resource FgsFunctionV2#mount_resource}.

---

##### `mountSharePath`<sup>Required</sup> <a name="mountSharePath" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountSharePath"></a>

```typescript
public readonly mountSharePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_share_path FgsFunctionV2#mount_share_path}.

---

##### `mountType`<sup>Required</sup> <a name="mountType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountType"></a>

```typescript
public readonly mountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#mount_type FgsFunctionV2#mount_type}.

---

### FgsFunctionV2NetworkController <a name="FgsFunctionV2NetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2NetworkController: fgsFunctionV2.FgsFunctionV2NetworkController = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.disablePublicNetwork">disablePublicNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#disable_public_network FgsFunctionV2#disable_public_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.triggerAccessVpcs">triggerAccessVpcs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]</code> | trigger_access_vpcs block. |

---

##### `disablePublicNetwork`<sup>Optional</sup> <a name="disablePublicNetwork" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.disablePublicNetwork"></a>

```typescript
public readonly disablePublicNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#disable_public_network FgsFunctionV2#disable_public_network}.

---

##### `triggerAccessVpcs`<sup>Optional</sup> <a name="triggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.triggerAccessVpcs"></a>

```typescript
public readonly triggerAccessVpcs: IResolvable | FgsFunctionV2NetworkControllerTriggerAccessVpcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]

trigger_access_vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#trigger_access_vpcs FgsFunctionV2#trigger_access_vpcs}

---

### FgsFunctionV2NetworkControllerTriggerAccessVpcs <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2NetworkControllerTriggerAccessVpcs: fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcName">vpcName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#vpc_name FgsFunctionV2#vpc_name}. |

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}.

---

##### `vpcName`<sup>Optional</sup> <a name="vpcName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#vpc_name FgsFunctionV2#vpc_name}.

---

### FgsFunctionV2ReservedInstances <a name="FgsFunctionV2ReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2ReservedInstances: fgsFunctionV2.FgsFunctionV2ReservedInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#count FgsFunctionV2#count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierName">qualifierName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#qualifier_name FgsFunctionV2#qualifier_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierType">qualifierType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#qualifier_type FgsFunctionV2#qualifier_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.idleMode">idleMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#idle_mode FgsFunctionV2#idle_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.tacticsConfig">tacticsConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | tactics_config block. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#count FgsFunctionV2#count}.

---

##### `qualifierName`<sup>Required</sup> <a name="qualifierName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierName"></a>

```typescript
public readonly qualifierName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#qualifier_name FgsFunctionV2#qualifier_name}.

---

##### `qualifierType`<sup>Required</sup> <a name="qualifierType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierType"></a>

```typescript
public readonly qualifierType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#qualifier_type FgsFunctionV2#qualifier_type}.

---

##### `idleMode`<sup>Optional</sup> <a name="idleMode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.idleMode"></a>

```typescript
public readonly idleMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#idle_mode FgsFunctionV2#idle_mode}.

---

##### `tacticsConfig`<sup>Optional</sup> <a name="tacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.tacticsConfig"></a>

```typescript
public readonly tacticsConfig: FgsFunctionV2ReservedInstancesTacticsConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

tactics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#tactics_config FgsFunctionV2#tactics_config}

---

### FgsFunctionV2ReservedInstancesTacticsConfig <a name="FgsFunctionV2ReservedInstancesTacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2ReservedInstancesTacticsConfig: fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.property.cronConfigs">cronConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]</code> | cron_configs block. |

---

##### `cronConfigs`<sup>Optional</sup> <a name="cronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.property.cronConfigs"></a>

```typescript
public readonly cronConfigs: IResolvable | FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]

cron_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#cron_configs FgsFunctionV2#cron_configs}

---

### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2ReservedInstancesTacticsConfigCronConfigs: fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#count FgsFunctionV2#count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.cron">cron</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#cron FgsFunctionV2#cron}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.expiredTime">expiredTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#expired_time FgsFunctionV2#expired_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.startTime">startTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#start_time FgsFunctionV2#start_time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#count FgsFunctionV2#count}.

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#cron FgsFunctionV2#cron}.

---

##### `expiredTime`<sup>Required</sup> <a name="expiredTime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.expiredTime"></a>

```typescript
public readonly expiredTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#expired_time FgsFunctionV2#expired_time}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#start_time FgsFunctionV2#start_time}.

---

### FgsFunctionV2Timeouts <a name="FgsFunctionV2Timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2Timeouts: fgsFunctionV2.FgsFunctionV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#create FgsFunctionV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#delete FgsFunctionV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#create FgsFunctionV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#delete FgsFunctionV2#delete}.

---

### FgsFunctionV2Versions <a name="FgsFunctionV2Versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2Versions: fgsFunctionV2.FgsFunctionV2Versions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.name">name</a></code> | <code>string</code> | The version name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | aliases block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#name FgsFunctionV2#name}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.aliases"></a>

```typescript
public readonly aliases: FgsFunctionV2VersionsAliases;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#aliases FgsFunctionV2#aliases}

---

### FgsFunctionV2VersionsAliases <a name="FgsFunctionV2VersionsAliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

const fgsFunctionV2VersionsAliases: fgsFunctionV2.FgsFunctionV2VersionsAliases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### FgsFunctionV2CustomImageOutputReference <a name="FgsFunctionV2CustomImageOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2CustomImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetWorkingDir"></a>

```typescript
public resetWorkingDir(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.argsInput">argsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.commandInput">commandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.args">args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDirInput"></a>

```typescript
public readonly workingDirInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FgsFunctionV2CustomImage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

---


### FgsFunctionV2FuncMountsList <a name="FgsFunctionV2FuncMountsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2FuncMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get"></a>

```typescript
public get(index: number): FgsFunctionV2FuncMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2FuncMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]

---


### FgsFunctionV2FuncMountsOutputReference <a name="FgsFunctionV2FuncMountsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPathInput">localMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResourceInput">mountResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePathInput">mountSharePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountTypeInput">mountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPath">localMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResource">mountResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePath">mountSharePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountType">mountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localMountPathInput`<sup>Optional</sup> <a name="localMountPathInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPathInput"></a>

```typescript
public readonly localMountPathInput: string;
```

- *Type:* string

---

##### `mountResourceInput`<sup>Optional</sup> <a name="mountResourceInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResourceInput"></a>

```typescript
public readonly mountResourceInput: string;
```

- *Type:* string

---

##### `mountSharePathInput`<sup>Optional</sup> <a name="mountSharePathInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePathInput"></a>

```typescript
public readonly mountSharePathInput: string;
```

- *Type:* string

---

##### `mountTypeInput`<sup>Optional</sup> <a name="mountTypeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountTypeInput"></a>

```typescript
public readonly mountTypeInput: string;
```

- *Type:* string

---

##### `localMountPath`<sup>Required</sup> <a name="localMountPath" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPath"></a>

```typescript
public readonly localMountPath: string;
```

- *Type:* string

---

##### `mountResource`<sup>Required</sup> <a name="mountResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResource"></a>

```typescript
public readonly mountResource: string;
```

- *Type:* string

---

##### `mountSharePath`<sup>Required</sup> <a name="mountSharePath" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePath"></a>

```typescript
public readonly mountSharePath: string;
```

- *Type:* string

---

##### `mountType`<sup>Required</sup> <a name="mountType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountType"></a>

```typescript
public readonly mountType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2FuncMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>

---


### FgsFunctionV2NetworkControllerOutputReference <a name="FgsFunctionV2NetworkControllerOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs">putTriggerAccessVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetDisablePublicNetwork">resetDisablePublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetTriggerAccessVpcs">resetTriggerAccessVpcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTriggerAccessVpcs` <a name="putTriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs"></a>

```typescript
public putTriggerAccessVpcs(value: IResolvable | FgsFunctionV2NetworkControllerTriggerAccessVpcs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]

---

##### `resetDisablePublicNetwork` <a name="resetDisablePublicNetwork" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetDisablePublicNetwork"></a>

```typescript
public resetDisablePublicNetwork(): void
```

##### `resetTriggerAccessVpcs` <a name="resetTriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetTriggerAccessVpcs"></a>

```typescript
public resetTriggerAccessVpcs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcs">triggerAccessVpcs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList">FgsFunctionV2NetworkControllerTriggerAccessVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetworkInput">disablePublicNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcsInput">triggerAccessVpcsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetwork">disablePublicNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `triggerAccessVpcs`<sup>Required</sup> <a name="triggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcs"></a>

```typescript
public readonly triggerAccessVpcs: FgsFunctionV2NetworkControllerTriggerAccessVpcsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList">FgsFunctionV2NetworkControllerTriggerAccessVpcsList</a>

---

##### `disablePublicNetworkInput`<sup>Optional</sup> <a name="disablePublicNetworkInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetworkInput"></a>

```typescript
public readonly disablePublicNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `triggerAccessVpcsInput`<sup>Optional</sup> <a name="triggerAccessVpcsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcsInput"></a>

```typescript
public readonly triggerAccessVpcsInput: IResolvable | FgsFunctionV2NetworkControllerTriggerAccessVpcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]

---

##### `disablePublicNetwork`<sup>Required</sup> <a name="disablePublicNetwork" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetwork"></a>

```typescript
public readonly disablePublicNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FgsFunctionV2NetworkController;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

---


### FgsFunctionV2NetworkControllerTriggerAccessVpcsList <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get"></a>

```typescript
public get(index: number): FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2NetworkControllerTriggerAccessVpcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]

---


### FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcName">resetVpcName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

##### `resetVpcName` <a name="resetVpcName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcName"></a>

```typescript
public resetVpcName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcNameInput">vpcNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcNameInput`<sup>Optional</sup> <a name="vpcNameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcNameInput"></a>

```typescript
public readonly vpcNameInput: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2NetworkControllerTriggerAccessVpcs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>

---


### FgsFunctionV2ReservedInstancesList <a name="FgsFunctionV2ReservedInstancesList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2ReservedInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get"></a>

```typescript
public get(index: number): FgsFunctionV2ReservedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2ReservedInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]

---


### FgsFunctionV2ReservedInstancesOutputReference <a name="FgsFunctionV2ReservedInstancesOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig">putTacticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetIdleMode">resetIdleMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetTacticsConfig">resetTacticsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTacticsConfig` <a name="putTacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig"></a>

```typescript
public putTacticsConfig(value: FgsFunctionV2ReservedInstancesTacticsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

---

##### `resetIdleMode` <a name="resetIdleMode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetIdleMode"></a>

```typescript
public resetIdleMode(): void
```

##### `resetTacticsConfig` <a name="resetTacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetTacticsConfig"></a>

```typescript
public resetTacticsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfig">tacticsConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference">FgsFunctionV2ReservedInstancesTacticsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleModeInput">idleModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierNameInput">qualifierNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierTypeInput">qualifierTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfigInput">tacticsConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleMode">idleMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierName">qualifierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierType">qualifierType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tacticsConfig`<sup>Required</sup> <a name="tacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfig"></a>

```typescript
public readonly tacticsConfig: FgsFunctionV2ReservedInstancesTacticsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference">FgsFunctionV2ReservedInstancesTacticsConfigOutputReference</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `idleModeInput`<sup>Optional</sup> <a name="idleModeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleModeInput"></a>

```typescript
public readonly idleModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `qualifierNameInput`<sup>Optional</sup> <a name="qualifierNameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierNameInput"></a>

```typescript
public readonly qualifierNameInput: string;
```

- *Type:* string

---

##### `qualifierTypeInput`<sup>Optional</sup> <a name="qualifierTypeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierTypeInput"></a>

```typescript
public readonly qualifierTypeInput: string;
```

- *Type:* string

---

##### `tacticsConfigInput`<sup>Optional</sup> <a name="tacticsConfigInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfigInput"></a>

```typescript
public readonly tacticsConfigInput: FgsFunctionV2ReservedInstancesTacticsConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `idleMode`<sup>Required</sup> <a name="idleMode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleMode"></a>

```typescript
public readonly idleMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `qualifierName`<sup>Required</sup> <a name="qualifierName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierName"></a>

```typescript
public readonly qualifierName: string;
```

- *Type:* string

---

##### `qualifierType`<sup>Required</sup> <a name="qualifierType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierType"></a>

```typescript
public readonly qualifierType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2ReservedInstances;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>

---


### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get"></a>

```typescript
public get(index: number): FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]

---


### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cronInput">cronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTimeInput">expiredTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTime">expiredTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cronInput"></a>

```typescript
public readonly cronInput: string;
```

- *Type:* string

---

##### `expiredTimeInput`<sup>Optional</sup> <a name="expiredTimeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTimeInput"></a>

```typescript
public readonly expiredTimeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `expiredTime`<sup>Required</sup> <a name="expiredTime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTime"></a>

```typescript
public readonly expiredTime: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>

---


### FgsFunctionV2ReservedInstancesTacticsConfigOutputReference <a name="FgsFunctionV2ReservedInstancesTacticsConfigOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs">putCronConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resetCronConfigs">resetCronConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCronConfigs` <a name="putCronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs"></a>

```typescript
public putCronConfigs(value: IResolvable | FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]

---

##### `resetCronConfigs` <a name="resetCronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resetCronConfigs"></a>

```typescript
public resetCronConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigs">cronConfigs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigsInput">cronConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronConfigs`<sup>Required</sup> <a name="cronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigs"></a>

```typescript
public readonly cronConfigs: FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList</a>

---

##### `cronConfigsInput`<sup>Optional</sup> <a name="cronConfigsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigsInput"></a>

```typescript
public readonly cronConfigsInput: IResolvable | FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FgsFunctionV2ReservedInstancesTacticsConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

---


### FgsFunctionV2TimeoutsOutputReference <a name="FgsFunctionV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

---


### FgsFunctionV2VersionsAliasesOutputReference <a name="FgsFunctionV2VersionsAliasesOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FgsFunctionV2VersionsAliases;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

---


### FgsFunctionV2VersionsList <a name="FgsFunctionV2VersionsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2VersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get"></a>

```typescript
public get(index: number): FgsFunctionV2VersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2Versions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]

---


### FgsFunctionV2VersionsOutputReference <a name="FgsFunctionV2VersionsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer"></a>

```typescript
import { fgsFunctionV2 } from '@cdktf/provider-opentelekomcloud'

new fgsFunctionV2.FgsFunctionV2VersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases">putAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetAliases">resetAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAliases` <a name="putAliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases"></a>

```typescript
public putAliases(value: FgsFunctionV2VersionsAliases): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

---

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetAliases"></a>

```typescript
public resetAliases(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference">FgsFunctionV2VersionsAliasesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliasesInput">aliasesInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliases"></a>

```typescript
public readonly aliases: FgsFunctionV2VersionsAliasesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference">FgsFunctionV2VersionsAliasesOutputReference</a>

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: FgsFunctionV2VersionsAliases;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FgsFunctionV2Versions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>

---



