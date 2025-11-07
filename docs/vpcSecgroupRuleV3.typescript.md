# `vpcSecgroupRuleV3` Submodule <a name="`vpcSecgroupRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecgroupRuleV3 <a name="VpcSecgroupRuleV3" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3 opentelekomcloud_vpc_secgroup_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer"></a>

```typescript
import { vpcSecgroupRuleV3 } from '@cdktf/provider-opentelekomcloud'

new vpcSecgroupRuleV3.VpcSecgroupRuleV3(scope: Construct, id: string, config: VpcSecgroupRuleV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config">VpcSecgroupRuleV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config">VpcSecgroupRuleV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetEtherType">resetEtherType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetMultiPort">resetMultiPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetRemoteGroupId">resetRemoteGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetRemoteIpPrefix">resetRemoteIpPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcSecgroupRuleV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEtherType` <a name="resetEtherType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetEtherType"></a>

```typescript
public resetEtherType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMultiPort` <a name="resetMultiPort" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetMultiPort"></a>

```typescript
public resetMultiPort(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRemoteGroupId` <a name="resetRemoteGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetRemoteGroupId"></a>

```typescript
public resetRemoteGroupId(): void
```

##### `resetRemoteIpPrefix` <a name="resetRemoteIpPrefix" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetRemoteIpPrefix"></a>

```typescript
public resetRemoteIpPrefix(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcSecgroupRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isConstruct"></a>

```typescript
import { vpcSecgroupRuleV3 } from '@cdktf/provider-opentelekomcloud'

vpcSecgroupRuleV3.VpcSecgroupRuleV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformElement"></a>

```typescript
import { vpcSecgroupRuleV3 } from '@cdktf/provider-opentelekomcloud'

vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformResource"></a>

```typescript
import { vpcSecgroupRuleV3 } from '@cdktf/provider-opentelekomcloud'

vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport"></a>

```typescript
import { vpcSecgroupRuleV3 } from '@cdktf/provider-opentelekomcloud'

vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcSecgroupRuleV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcSecgroupRuleV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcSecgroupRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcSecgroupRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteAddressGroupId">remoteAddressGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference">VpcSecgroupRuleV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.etherTypeInput">etherTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.multiPortInput">multiPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteGroupIdInput">remoteGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteIpPrefixInput">remoteIpPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.etherType">etherType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.multiPort">multiPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteGroupId">remoteGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteIpPrefix">remoteIpPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `remoteAddressGroupId`<sup>Required</sup> <a name="remoteAddressGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteAddressGroupId"></a>

```typescript
public readonly remoteAddressGroupId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.timeouts"></a>

```typescript
public readonly timeouts: VpcSecgroupRuleV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference">VpcSecgroupRuleV3TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `etherTypeInput`<sup>Optional</sup> <a name="etherTypeInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.etherTypeInput"></a>

```typescript
public readonly etherTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multiPortInput`<sup>Optional</sup> <a name="multiPortInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.multiPortInput"></a>

```typescript
public readonly multiPortInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `remoteGroupIdInput`<sup>Optional</sup> <a name="remoteGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteGroupIdInput"></a>

```typescript
public readonly remoteGroupIdInput: string;
```

- *Type:* string

---

##### `remoteIpPrefixInput`<sup>Optional</sup> <a name="remoteIpPrefixInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteIpPrefixInput"></a>

```typescript
public readonly remoteIpPrefixInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcSecgroupRuleV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `etherType`<sup>Required</sup> <a name="etherType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.etherType"></a>

```typescript
public readonly etherType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiPort`<sup>Required</sup> <a name="multiPort" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.multiPort"></a>

```typescript
public readonly multiPort: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `remoteGroupId`<sup>Required</sup> <a name="remoteGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteGroupId"></a>

```typescript
public readonly remoteGroupId: string;
```

- *Type:* string

---

##### `remoteIpPrefix`<sup>Required</sup> <a name="remoteIpPrefix" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteIpPrefix"></a>

```typescript
public readonly remoteIpPrefix: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecgroupRuleV3Config <a name="VpcSecgroupRuleV3Config" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.Initializer"></a>

```typescript
import { vpcSecgroupRuleV3 } from '@cdktf/provider-opentelekomcloud'

const vpcSecgroupRuleV3Config: vpcSecgroupRuleV3.VpcSecgroupRuleV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#direction VpcSecgroupRuleV3#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#security_group_id VpcSecgroupRuleV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#action VpcSecgroupRuleV3#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#description VpcSecgroupRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.etherType">etherType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#ether_type VpcSecgroupRuleV3#ether_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#id VpcSecgroupRuleV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.multiPort">multiPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#multi_port VpcSecgroupRuleV3#multi_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#priority VpcSecgroupRuleV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#protocol VpcSecgroupRuleV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.remoteGroupId">remoteGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#remote_group_id VpcSecgroupRuleV3#remote_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.remoteIpPrefix">remoteIpPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#remote_ip_prefix VpcSecgroupRuleV3#remote_ip_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#direction VpcSecgroupRuleV3#direction}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#security_group_id VpcSecgroupRuleV3#security_group_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#action VpcSecgroupRuleV3#action}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#description VpcSecgroupRuleV3#description}.

---

##### `etherType`<sup>Optional</sup> <a name="etherType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.etherType"></a>

```typescript
public readonly etherType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#ether_type VpcSecgroupRuleV3#ether_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#id VpcSecgroupRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiPort`<sup>Optional</sup> <a name="multiPort" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.multiPort"></a>

```typescript
public readonly multiPort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#multi_port VpcSecgroupRuleV3#multi_port}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#priority VpcSecgroupRuleV3#priority}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#protocol VpcSecgroupRuleV3#protocol}.

---

##### `remoteGroupId`<sup>Optional</sup> <a name="remoteGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.remoteGroupId"></a>

```typescript
public readonly remoteGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#remote_group_id VpcSecgroupRuleV3#remote_group_id}.

---

##### `remoteIpPrefix`<sup>Optional</sup> <a name="remoteIpPrefix" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.remoteIpPrefix"></a>

```typescript
public readonly remoteIpPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#remote_ip_prefix VpcSecgroupRuleV3#remote_ip_prefix}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: VpcSecgroupRuleV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#timeouts VpcSecgroupRuleV3#timeouts}

---

### VpcSecgroupRuleV3Timeouts <a name="VpcSecgroupRuleV3Timeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts.Initializer"></a>

```typescript
import { vpcSecgroupRuleV3 } from '@cdktf/provider-opentelekomcloud'

const vpcSecgroupRuleV3Timeouts: vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#delete VpcSecgroupRuleV3#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#delete VpcSecgroupRuleV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcSecgroupRuleV3TimeoutsOutputReference <a name="VpcSecgroupRuleV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcSecgroupRuleV3 } from '@cdktf/provider-opentelekomcloud'

new vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcSecgroupRuleV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a>

---



