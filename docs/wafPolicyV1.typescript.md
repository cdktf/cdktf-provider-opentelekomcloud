# `opentelekomcloud_waf_policy_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_waf_policy_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1).

# `wafPolicyV1` Submodule <a name="`wafPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPolicyV1 <a name="WafPolicyV1" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1 opentelekomcloud_waf_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new wafPolicyV1.WafPolicyV1(scope: Construct, id: string, config: WafPolicyV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config">WafPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config">WafPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetFullDetection">resetFullDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAction` <a name="putAction" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction"></a>

```typescript
public putAction(value: WafPolicyV1Action): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions"></a>

```typescript
public putOptions(value: WafPolicyV1Options): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts"></a>

```typescript
public putTimeouts(value: WafPolicyV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetFullDetection` <a name="resetFullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetFullDetection"></a>

```typescript
public resetFullDetection(): void
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

wafPolicyV1.WafPolicyV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

wafPolicyV1.WafPolicyV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

wafPolicyV1.WafPolicyV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference">WafPolicyV1ActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.options">options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference">WafPolicyV1OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference">WafPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetectionInput">fullDetectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.levelInput">levelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetection">fullDetection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.level">level</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.action"></a>

```typescript
public readonly action: WafPolicyV1ActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference">WafPolicyV1ActionOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.options"></a>

```typescript
public readonly options: WafPolicyV1OptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference">WafPolicyV1OptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeouts"></a>

```typescript
public readonly timeouts: WafPolicyV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference">WafPolicyV1TimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.actionInput"></a>

```typescript
public readonly actionInput: WafPolicyV1Action;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---

##### `fullDetectionInput`<sup>Optional</sup> <a name="fullDetectionInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetectionInput"></a>

```typescript
public readonly fullDetectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.levelInput"></a>

```typescript
public readonly levelInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.optionsInput"></a>

```typescript
public readonly optionsInput: WafPolicyV1Options;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WafPolicyV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

---

##### `fullDetection`<sup>Required</sup> <a name="fullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetection"></a>

```typescript
public readonly fullDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafPolicyV1Action <a name="WafPolicyV1Action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.Initializer"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const wafPolicyV1Action: wafPolicyV1.WafPolicyV1Action = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#category WafPolicyV1#category}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#category WafPolicyV1#category}.

---

### WafPolicyV1Config <a name="WafPolicyV1Config" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.Initializer"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const wafPolicyV1Config: wafPolicyV1.WafPolicyV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#name WafPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.fullDetection">fullDetection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.hosts">hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#id WafPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.level">level</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#level WafPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.options">options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#name WafPolicyV1#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.action"></a>

```typescript
public readonly action: WafPolicyV1Action;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#action WafPolicyV1#action}

---

##### `fullDetection`<sup>Optional</sup> <a name="fullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.fullDetection"></a>

```typescript
public readonly fullDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#id WafPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#level WafPolicyV1#level}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.options"></a>

```typescript
public readonly options: WafPolicyV1Options;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#options WafPolicyV1#options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: WafPolicyV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#timeouts WafPolicyV1#timeouts}

---

### WafPolicyV1Options <a name="WafPolicyV1Options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.Initializer"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const wafPolicyV1Options: wafPolicyV1.WafPolicyV1Options = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.antitamper">antitamper</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#antitamper WafPolicyV1#antitamper}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.cc">cc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#cc WafPolicyV1#cc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.common">common</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#common WafPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawler">crawler</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler WafPolicyV1#crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerEngine">crawlerEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerOther">crawlerOther</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScanner">crawlerScanner</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScript">crawlerScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.custom">custom</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#custom WafPolicyV1#custom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.ignore">ignore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#ignore WafPolicyV1#ignore}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.privacy">privacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#privacy WafPolicyV1#privacy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webattack">webattack</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#webattack WafPolicyV1#webattack}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webshell">webshell</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#webshell WafPolicyV1#webshell}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.whiteblackip">whiteblackip</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}. |

---

##### `antitamper`<sup>Optional</sup> <a name="antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.antitamper"></a>

```typescript
public readonly antitamper: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#antitamper WafPolicyV1#antitamper}.

---

##### `cc`<sup>Optional</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.cc"></a>

```typescript
public readonly cc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#cc WafPolicyV1#cc}.

---

##### `common`<sup>Optional</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.common"></a>

```typescript
public readonly common: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#common WafPolicyV1#common}.

---

##### `crawler`<sup>Optional</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawler"></a>

```typescript
public readonly crawler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler WafPolicyV1#crawler}.

---

##### `crawlerEngine`<sup>Optional</sup> <a name="crawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerEngine"></a>

```typescript
public readonly crawlerEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}.

---

##### `crawlerOther`<sup>Optional</sup> <a name="crawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerOther"></a>

```typescript
public readonly crawlerOther: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}.

---

##### `crawlerScanner`<sup>Optional</sup> <a name="crawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScanner"></a>

```typescript
public readonly crawlerScanner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}.

---

##### `crawlerScript`<sup>Optional</sup> <a name="crawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScript"></a>

```typescript
public readonly crawlerScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.custom"></a>

```typescript
public readonly custom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#custom WafPolicyV1#custom}.

---

##### `ignore`<sup>Optional</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.ignore"></a>

```typescript
public readonly ignore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#ignore WafPolicyV1#ignore}.

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.privacy"></a>

```typescript
public readonly privacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#privacy WafPolicyV1#privacy}.

---

##### `webattack`<sup>Optional</sup> <a name="webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webattack"></a>

```typescript
public readonly webattack: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#webattack WafPolicyV1#webattack}.

---

##### `webshell`<sup>Optional</sup> <a name="webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webshell"></a>

```typescript
public readonly webshell: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#webshell WafPolicyV1#webshell}.

---

##### `whiteblackip`<sup>Optional</sup> <a name="whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.whiteblackip"></a>

```typescript
public readonly whiteblackip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}.

---

### WafPolicyV1Timeouts <a name="WafPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.Initializer"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const wafPolicyV1Timeouts: wafPolicyV1.WafPolicyV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#create WafPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#delete WafPolicyV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#create WafPolicyV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_policy_v1#delete WafPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafPolicyV1ActionOutputReference <a name="WafPolicyV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new wafPolicyV1.WafPolicyV1ActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafPolicyV1Action;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---


### WafPolicyV1OptionsOutputReference <a name="WafPolicyV1OptionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new wafPolicyV1.WafPolicyV1OptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetAntitamper">resetAntitamper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCc">resetCc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCommon">resetCommon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawler">resetCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerEngine">resetCrawlerEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerOther">resetCrawlerOther</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScanner">resetCrawlerScanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScript">resetCrawlerScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetIgnore">resetIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetPrivacy">resetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebattack">resetWebattack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebshell">resetWebshell</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWhiteblackip">resetWhiteblackip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAntitamper` <a name="resetAntitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetAntitamper"></a>

```typescript
public resetAntitamper(): void
```

##### `resetCc` <a name="resetCc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCc"></a>

```typescript
public resetCc(): void
```

##### `resetCommon` <a name="resetCommon" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCommon"></a>

```typescript
public resetCommon(): void
```

##### `resetCrawler` <a name="resetCrawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawler"></a>

```typescript
public resetCrawler(): void
```

##### `resetCrawlerEngine` <a name="resetCrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerEngine"></a>

```typescript
public resetCrawlerEngine(): void
```

##### `resetCrawlerOther` <a name="resetCrawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerOther"></a>

```typescript
public resetCrawlerOther(): void
```

##### `resetCrawlerScanner` <a name="resetCrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScanner"></a>

```typescript
public resetCrawlerScanner(): void
```

##### `resetCrawlerScript` <a name="resetCrawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScript"></a>

```typescript
public resetCrawlerScript(): void
```

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCustom"></a>

```typescript
public resetCustom(): void
```

##### `resetIgnore` <a name="resetIgnore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetIgnore"></a>

```typescript
public resetIgnore(): void
```

##### `resetPrivacy` <a name="resetPrivacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetPrivacy"></a>

```typescript
public resetPrivacy(): void
```

##### `resetWebattack` <a name="resetWebattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebattack"></a>

```typescript
public resetWebattack(): void
```

##### `resetWebshell` <a name="resetWebshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebshell"></a>

```typescript
public resetWebshell(): void
```

##### `resetWhiteblackip` <a name="resetWhiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWhiteblackip"></a>

```typescript
public resetWhiteblackip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamperInput">antitamperInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ccInput">ccInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.commonInput">commonInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngineInput">crawlerEngineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerInput">crawlerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOtherInput">crawlerOtherInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScannerInput">crawlerScannerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScriptInput">crawlerScriptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.customInput">customInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignoreInput">ignoreInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacyInput">privacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattackInput">webattackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshellInput">webshellInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackipInput">whiteblackipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamper">antitamper</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.cc">cc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.common">common</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawler">crawler</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngine">crawlerEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOther">crawlerOther</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScanner">crawlerScanner</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScript">crawlerScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.custom">custom</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignore">ignore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacy">privacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattack">webattack</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshell">webshell</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackip">whiteblackip</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `antitamperInput`<sup>Optional</sup> <a name="antitamperInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamperInput"></a>

```typescript
public readonly antitamperInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ccInput`<sup>Optional</sup> <a name="ccInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ccInput"></a>

```typescript
public readonly ccInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commonInput`<sup>Optional</sup> <a name="commonInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.commonInput"></a>

```typescript
public readonly commonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerEngineInput`<sup>Optional</sup> <a name="crawlerEngineInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngineInput"></a>

```typescript
public readonly crawlerEngineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerInput`<sup>Optional</sup> <a name="crawlerInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerInput"></a>

```typescript
public readonly crawlerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerOtherInput`<sup>Optional</sup> <a name="crawlerOtherInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOtherInput"></a>

```typescript
public readonly crawlerOtherInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerScannerInput`<sup>Optional</sup> <a name="crawlerScannerInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScannerInput"></a>

```typescript
public readonly crawlerScannerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerScriptInput`<sup>Optional</sup> <a name="crawlerScriptInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScriptInput"></a>

```typescript
public readonly crawlerScriptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.customInput"></a>

```typescript
public readonly customInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreInput`<sup>Optional</sup> <a name="ignoreInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignoreInput"></a>

```typescript
public readonly ignoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privacyInput`<sup>Optional</sup> <a name="privacyInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacyInput"></a>

```typescript
public readonly privacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webattackInput`<sup>Optional</sup> <a name="webattackInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattackInput"></a>

```typescript
public readonly webattackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webshellInput`<sup>Optional</sup> <a name="webshellInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshellInput"></a>

```typescript
public readonly webshellInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whiteblackipInput`<sup>Optional</sup> <a name="whiteblackipInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackipInput"></a>

```typescript
public readonly whiteblackipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `antitamper`<sup>Required</sup> <a name="antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamper"></a>

```typescript
public readonly antitamper: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cc`<sup>Required</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.cc"></a>

```typescript
public readonly cc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.common"></a>

```typescript
public readonly common: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawler`<sup>Required</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawler"></a>

```typescript
public readonly crawler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerEngine`<sup>Required</sup> <a name="crawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngine"></a>

```typescript
public readonly crawlerEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerOther`<sup>Required</sup> <a name="crawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOther"></a>

```typescript
public readonly crawlerOther: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerScanner`<sup>Required</sup> <a name="crawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScanner"></a>

```typescript
public readonly crawlerScanner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerScript`<sup>Required</sup> <a name="crawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScript"></a>

```typescript
public readonly crawlerScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.custom"></a>

```typescript
public readonly custom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignore`<sup>Required</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignore"></a>

```typescript
public readonly ignore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacy"></a>

```typescript
public readonly privacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webattack`<sup>Required</sup> <a name="webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattack"></a>

```typescript
public readonly webattack: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webshell`<sup>Required</sup> <a name="webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshell"></a>

```typescript
public readonly webshell: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whiteblackip`<sup>Required</sup> <a name="whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackip"></a>

```typescript
public readonly whiteblackip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafPolicyV1Options;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---


### WafPolicyV1TimeoutsOutputReference <a name="WafPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { wafPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new wafPolicyV1.WafPolicyV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafPolicyV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

---



