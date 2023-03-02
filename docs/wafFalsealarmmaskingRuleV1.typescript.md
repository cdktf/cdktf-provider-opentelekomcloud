# `wafFalsealarmmaskingRuleV1` Submodule <a name="`wafFalsealarmmaskingRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafFalsealarmmaskingRuleV1 <a name="WafFalsealarmmaskingRuleV1" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1 opentelekomcloud_waf_falsealarmmasking_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.Initializer"></a>

```typescript
import { wafFalsealarmmaskingRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1(scope: Construct, id: string, config: WafFalsealarmmaskingRuleV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config">WafFalsealarmmaskingRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config">WafFalsealarmmaskingRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.putTimeouts"></a>

```typescript
public putTimeouts(value: WafFalsealarmmaskingRuleV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts">WafFalsealarmmaskingRuleV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isConstruct"></a>

```typescript
import { wafFalsealarmmaskingRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isTerraformElement"></a>

```typescript
import { wafFalsealarmmaskingRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isTerraformResource"></a>

```typescript
import { wafFalsealarmmaskingRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference">WafFalsealarmmaskingRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts">WafFalsealarmmaskingRuleV1Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.timeouts"></a>

```typescript
public readonly timeouts: WafFalsealarmmaskingRuleV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference">WafFalsealarmmaskingRuleV1TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: WafFalsealarmmaskingRuleV1Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts">WafFalsealarmmaskingRuleV1Timeouts</a> | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafFalsealarmmaskingRuleV1Config <a name="WafFalsealarmmaskingRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.Initializer"></a>

```typescript
import { wafFalsealarmmaskingRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafFalsealarmmaskingRuleV1Config: wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#policy_id WafFalsealarmmaskingRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.rule">rule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#rule WafFalsealarmmaskingRuleV1#rule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#url WafFalsealarmmaskingRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#id WafFalsealarmmaskingRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts">WafFalsealarmmaskingRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#policy_id WafFalsealarmmaskingRuleV1#policy_id}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#rule WafFalsealarmmaskingRuleV1#rule}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#url WafFalsealarmmaskingRuleV1#url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#id WafFalsealarmmaskingRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: WafFalsealarmmaskingRuleV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts">WafFalsealarmmaskingRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#timeouts WafFalsealarmmaskingRuleV1#timeouts}

---

### WafFalsealarmmaskingRuleV1Timeouts <a name="WafFalsealarmmaskingRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts.Initializer"></a>

```typescript
import { wafFalsealarmmaskingRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafFalsealarmmaskingRuleV1Timeouts: wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#create WafFalsealarmmaskingRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#delete WafFalsealarmmaskingRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#create WafFalsealarmmaskingRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1#delete WafFalsealarmmaskingRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafFalsealarmmaskingRuleV1TimeoutsOutputReference <a name="WafFalsealarmmaskingRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { wafFalsealarmmaskingRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts">WafFalsealarmmaskingRuleV1Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafFalsealarmmaskingRuleV1Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafFalsealarmmaskingRuleV1.WafFalsealarmmaskingRuleV1Timeouts">WafFalsealarmmaskingRuleV1Timeouts</a> | cdktf.IResolvable

---


