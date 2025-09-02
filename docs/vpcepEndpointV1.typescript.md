# `vpcepEndpointV1` Submodule <a name="`vpcepEndpointV1` Submodule" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcepEndpointV1 <a name="VpcepEndpointV1" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1 opentelekomcloud_vpcep_endpoint_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.Initializer"></a>

```typescript
import { vpcepEndpointV1 } from '@cdktf/provider-opentelekomcloud'

new vpcepEndpointV1.VpcepEndpointV1(scope: Construct, id: string, config: VpcepEndpointV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config">VpcepEndpointV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config">VpcepEndpointV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetEnableDns">resetEnableDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetEnableWhitelist">resetEnableWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetPolicyStatement">resetPolicyStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetPortIp">resetPortIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetRouteTables">resetRouteTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetWhitelist">resetWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcepEndpointV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts">VpcepEndpointV1Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableDns` <a name="resetEnableDns" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetEnableDns"></a>

```typescript
public resetEnableDns(): void
```

##### `resetEnableWhitelist` <a name="resetEnableWhitelist" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetEnableWhitelist"></a>

```typescript
public resetEnableWhitelist(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyStatement` <a name="resetPolicyStatement" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetPolicyStatement"></a>

```typescript
public resetPolicyStatement(): void
```

##### `resetPortIp` <a name="resetPortIp" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetPortIp"></a>

```typescript
public resetPortIp(): void
```

##### `resetRouteTables` <a name="resetRouteTables" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetRouteTables"></a>

```typescript
public resetRouteTables(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWhitelist` <a name="resetWhitelist" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.resetWhitelist"></a>

```typescript
public resetWhitelist(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcepEndpointV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isConstruct"></a>

```typescript
import { vpcepEndpointV1 } from '@cdktf/provider-opentelekomcloud'

vpcepEndpointV1.VpcepEndpointV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isTerraformElement"></a>

```typescript
import { vpcepEndpointV1 } from '@cdktf/provider-opentelekomcloud'

vpcepEndpointV1.VpcepEndpointV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isTerraformResource"></a>

```typescript
import { vpcepEndpointV1 } from '@cdktf/provider-opentelekomcloud'

vpcepEndpointV1.VpcepEndpointV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.generateConfigForImport"></a>

```typescript
import { vpcepEndpointV1 } from '@cdktf/provider-opentelekomcloud'

vpcepEndpointV1.VpcepEndpointV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcepEndpointV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcepEndpointV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcepEndpointV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcepEndpointV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.markerId">markerId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference">VpcepEndpointV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.enableDnsInput">enableDnsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.enableWhitelistInput">enableWhitelistInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.policyStatementInput">policyStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.portIpInput">portIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.routeTablesInput">routeTablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts">VpcepEndpointV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.whitelistInput">whitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.enableDns">enableDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.enableWhitelist">enableWhitelist</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.policyStatement">policyStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.portIp">portIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.routeTables">routeTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.whitelist">whitelist</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

---

##### `markerId`<sup>Required</sup> <a name="markerId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.markerId"></a>

```typescript
public readonly markerId: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.timeouts"></a>

```typescript
public readonly timeouts: VpcepEndpointV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference">VpcepEndpointV1TimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableDnsInput`<sup>Optional</sup> <a name="enableDnsInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.enableDnsInput"></a>

```typescript
public readonly enableDnsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableWhitelistInput`<sup>Optional</sup> <a name="enableWhitelistInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.enableWhitelistInput"></a>

```typescript
public readonly enableWhitelistInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyStatementInput`<sup>Optional</sup> <a name="policyStatementInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.policyStatementInput"></a>

```typescript
public readonly policyStatementInput: string;
```

- *Type:* string

---

##### `portIpInput`<sup>Optional</sup> <a name="portIpInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.portIpInput"></a>

```typescript
public readonly portIpInput: string;
```

- *Type:* string

---

##### `routeTablesInput`<sup>Optional</sup> <a name="routeTablesInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.routeTablesInput"></a>

```typescript
public readonly routeTablesInput: string[];
```

- *Type:* string[]

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcepEndpointV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts">VpcepEndpointV1Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `whitelistInput`<sup>Optional</sup> <a name="whitelistInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.whitelistInput"></a>

```typescript
public readonly whitelistInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableDns`<sup>Required</sup> <a name="enableDns" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.enableDns"></a>

```typescript
public readonly enableDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableWhitelist`<sup>Required</sup> <a name="enableWhitelist" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.enableWhitelist"></a>

```typescript
public readonly enableWhitelist: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyStatement`<sup>Required</sup> <a name="policyStatement" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.policyStatement"></a>

```typescript
public readonly policyStatement: string;
```

- *Type:* string

---

##### `portIp`<sup>Required</sup> <a name="portIp" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.portIp"></a>

```typescript
public readonly portIp: string;
```

- *Type:* string

---

##### `routeTables`<sup>Required</sup> <a name="routeTables" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.routeTables"></a>

```typescript
public readonly routeTables: string[];
```

- *Type:* string[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.whitelist"></a>

```typescript
public readonly whitelist: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcepEndpointV1Config <a name="VpcepEndpointV1Config" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.Initializer"></a>

```typescript
import { vpcepEndpointV1 } from '@cdktf/provider-opentelekomcloud'

const vpcepEndpointV1Config: vpcepEndpointV1.VpcepEndpointV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#service_id VpcepEndpointV1#service_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#vpc_id VpcepEndpointV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#description VpcepEndpointV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.enableDns">enableDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#enable_dns VpcepEndpointV1#enable_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.enableWhitelist">enableWhitelist</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#enable_whitelist VpcepEndpointV1#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#id VpcepEndpointV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.policyStatement">policyStatement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#policy_statement VpcepEndpointV1#policy_statement}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.portIp">portIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#port_ip VpcepEndpointV1#port_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.routeTables">routeTables</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#route_tables VpcepEndpointV1#route_tables}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#subnet_id VpcepEndpointV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#tags VpcepEndpointV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts">VpcepEndpointV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.whitelist">whitelist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#whitelist VpcepEndpointV1#whitelist}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#service_id VpcepEndpointV1#service_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#vpc_id VpcepEndpointV1#vpc_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#description VpcepEndpointV1#description}.

---

##### `enableDns`<sup>Optional</sup> <a name="enableDns" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.enableDns"></a>

```typescript
public readonly enableDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#enable_dns VpcepEndpointV1#enable_dns}.

---

##### `enableWhitelist`<sup>Optional</sup> <a name="enableWhitelist" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.enableWhitelist"></a>

```typescript
public readonly enableWhitelist: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#enable_whitelist VpcepEndpointV1#enable_whitelist}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#id VpcepEndpointV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyStatement`<sup>Optional</sup> <a name="policyStatement" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.policyStatement"></a>

```typescript
public readonly policyStatement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#policy_statement VpcepEndpointV1#policy_statement}.

---

##### `portIp`<sup>Optional</sup> <a name="portIp" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.portIp"></a>

```typescript
public readonly portIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#port_ip VpcepEndpointV1#port_ip}.

---

##### `routeTables`<sup>Optional</sup> <a name="routeTables" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.routeTables"></a>

```typescript
public readonly routeTables: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#route_tables VpcepEndpointV1#route_tables}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#subnet_id VpcepEndpointV1#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#tags VpcepEndpointV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: VpcepEndpointV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts">VpcepEndpointV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#timeouts VpcepEndpointV1#timeouts}

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Config.property.whitelist"></a>

```typescript
public readonly whitelist: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#whitelist VpcepEndpointV1#whitelist}.

---

### VpcepEndpointV1Timeouts <a name="VpcepEndpointV1Timeouts" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts.Initializer"></a>

```typescript
import { vpcepEndpointV1 } from '@cdktf/provider-opentelekomcloud'

const vpcepEndpointV1Timeouts: vpcepEndpointV1.VpcepEndpointV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#default VpcepEndpointV1#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpcep_endpoint_v1#default VpcepEndpointV1#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcepEndpointV1TimeoutsOutputReference <a name="VpcepEndpointV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcepEndpointV1 } from '@cdktf/provider-opentelekomcloud'

new vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts">VpcepEndpointV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcepEndpointV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcepEndpointV1.VpcepEndpointV1Timeouts">VpcepEndpointV1Timeouts</a>

---



