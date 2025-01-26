# `dataOpentelekomcloudHssHostsV5` Submodule <a name="`dataOpentelekomcloudHssHostsV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssHostsV5 <a name="DataOpentelekomcloudHssHostsV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5 opentelekomcloud_hss_hosts_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

dataopentelekomcloudhsshostsv5.NewDataOpentelekomcloudHssHostsV5(scope Construct, id *string, config DataOpentelekomcloudHssHostsV5Config) DataOpentelekomcloudHssHostsV5
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config">DataOpentelekomcloudHssHostsV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config">DataOpentelekomcloudHssHostsV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetAgentStatus">ResetAgentStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetAssetValue">ResetAssetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetDetectResult">ResetDetectResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetPolicyGroupId">ResetPolicyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectChargingMode">ResetProtectChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectVersion">ResetProtectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAgentStatus` <a name="ResetAgentStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetAgentStatus"></a>

```go
func ResetAgentStatus()
```

##### `ResetAssetValue` <a name="ResetAssetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetAssetValue"></a>

```go
func ResetAssetValue()
```

##### `ResetDetectResult` <a name="ResetDetectResult" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetDetectResult"></a>

```go
func ResetDetectResult()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetHostId"></a>

```go
func ResetHostId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetName"></a>

```go
func ResetName()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetOsType"></a>

```go
func ResetOsType()
```

##### `ResetPolicyGroupId` <a name="ResetPolicyGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetPolicyGroupId"></a>

```go
func ResetPolicyGroupId()
```

##### `ResetProtectChargingMode` <a name="ResetProtectChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectChargingMode"></a>

```go
func ResetProtectChargingMode()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectStatus"></a>

```go
func ResetProtectStatus()
```

##### `ResetProtectVersion` <a name="ResetProtectVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectVersion"></a>

```go
func ResetProtectVersion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssHostsV5 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

dataopentelekomcloudhsshostsv5.DataOpentelekomcloudHssHostsV5_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

dataopentelekomcloudhsshostsv5.DataOpentelekomcloudHssHostsV5_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

dataopentelekomcloudhsshostsv5.DataOpentelekomcloudHssHostsV5_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

dataopentelekomcloudhsshostsv5.DataOpentelekomcloudHssHostsV5_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudHssHostsV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudHssHostsV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudHssHostsV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssHostsV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hosts">Hosts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList">DataOpentelekomcloudHssHostsV5HostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.agentStatusInput">AgentStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.assetValueInput">AssetValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.detectResultInput">DetectResultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hostIdInput">HostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.policyGroupIdInput">PolicyGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectChargingModeInput">ProtectChargingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectStatusInput">ProtectStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectVersionInput">ProtectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.assetValue">AssetValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.detectResult">DetectResult</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.policyGroupId">PolicyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectChargingMode">ProtectChargingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectVersion">ProtectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hosts"></a>

```go
func Hosts() DataOpentelekomcloudHssHostsV5HostsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList">DataOpentelekomcloudHssHostsV5HostsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `AgentStatusInput`<sup>Optional</sup> <a name="AgentStatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.agentStatusInput"></a>

```go
func AgentStatusInput() *string
```

- *Type:* *string

---

##### `AssetValueInput`<sup>Optional</sup> <a name="AssetValueInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.assetValueInput"></a>

```go
func AssetValueInput() *string
```

- *Type:* *string

---

##### `DetectResultInput`<sup>Optional</sup> <a name="DetectResultInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.detectResultInput"></a>

```go
func DetectResultInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hostIdInput"></a>

```go
func HostIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `PolicyGroupIdInput`<sup>Optional</sup> <a name="PolicyGroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.policyGroupIdInput"></a>

```go
func PolicyGroupIdInput() *string
```

- *Type:* *string

---

##### `ProtectChargingModeInput`<sup>Optional</sup> <a name="ProtectChargingModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectChargingModeInput"></a>

```go
func ProtectChargingModeInput() *string
```

- *Type:* *string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectStatusInput"></a>

```go
func ProtectStatusInput() *string
```

- *Type:* *string

---

##### `ProtectVersionInput`<sup>Optional</sup> <a name="ProtectVersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectVersionInput"></a>

```go
func ProtectVersionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AssetValue`<sup>Required</sup> <a name="AssetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.assetValue"></a>

```go
func AssetValue() *string
```

- *Type:* *string

---

##### `DetectResult`<sup>Required</sup> <a name="DetectResult" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.detectResult"></a>

```go
func DetectResult() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `PolicyGroupId`<sup>Required</sup> <a name="PolicyGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.policyGroupId"></a>

```go
func PolicyGroupId() *string
```

- *Type:* *string

---

##### `ProtectChargingMode`<sup>Required</sup> <a name="ProtectChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectChargingMode"></a>

```go
func ProtectChargingMode() *string
```

- *Type:* *string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectStatus"></a>

```go
func ProtectStatus() *string
```

- *Type:* *string

---

##### `ProtectVersion`<sup>Required</sup> <a name="ProtectVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectVersion"></a>

```go
func ProtectVersion() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssHostsV5Config <a name="DataOpentelekomcloudHssHostsV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

&dataopentelekomcloudhsshostsv5.DataOpentelekomcloudHssHostsV5Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentStatus: *string,
	AssetValue: *string,
	DetectResult: *string,
	GroupId: *string,
	HostId: *string,
	Id: *string,
	Name: *string,
	OsType: *string,
	PolicyGroupId: *string,
	ProtectChargingMode: *string,
	ProtectStatus: *string,
	ProtectVersion: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#agent_status DataOpentelekomcloudHssHostsV5#agent_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.assetValue">AssetValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#asset_value DataOpentelekomcloudHssHostsV5#asset_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.detectResult">DetectResult</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#detect_result DataOpentelekomcloudHssHostsV5#detect_result}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#group_id DataOpentelekomcloudHssHostsV5#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.hostId">HostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#host_id DataOpentelekomcloudHssHostsV5#host_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#id DataOpentelekomcloudHssHostsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#name DataOpentelekomcloudHssHostsV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#os_type DataOpentelekomcloudHssHostsV5#os_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.policyGroupId">PolicyGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#policy_group_id DataOpentelekomcloudHssHostsV5#policy_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectChargingMode">ProtectChargingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#protect_charging_mode DataOpentelekomcloudHssHostsV5#protect_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#protect_status DataOpentelekomcloudHssHostsV5#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectVersion">ProtectVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#protect_version DataOpentelekomcloudHssHostsV5#protect_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#status DataOpentelekomcloudHssHostsV5#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentStatus`<sup>Optional</sup> <a name="AgentStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.agentStatus"></a>

```go
AgentStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#agent_status DataOpentelekomcloudHssHostsV5#agent_status}.

---

##### `AssetValue`<sup>Optional</sup> <a name="AssetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.assetValue"></a>

```go
AssetValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#asset_value DataOpentelekomcloudHssHostsV5#asset_value}.

---

##### `DetectResult`<sup>Optional</sup> <a name="DetectResult" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.detectResult"></a>

```go
DetectResult *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#detect_result DataOpentelekomcloudHssHostsV5#detect_result}.

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#group_id DataOpentelekomcloudHssHostsV5#group_id}.

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.hostId"></a>

```go
HostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#host_id DataOpentelekomcloudHssHostsV5#host_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#id DataOpentelekomcloudHssHostsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#name DataOpentelekomcloudHssHostsV5#name}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#os_type DataOpentelekomcloudHssHostsV5#os_type}.

---

##### `PolicyGroupId`<sup>Optional</sup> <a name="PolicyGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.policyGroupId"></a>

```go
PolicyGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#policy_group_id DataOpentelekomcloudHssHostsV5#policy_group_id}.

---

##### `ProtectChargingMode`<sup>Optional</sup> <a name="ProtectChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectChargingMode"></a>

```go
ProtectChargingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#protect_charging_mode DataOpentelekomcloudHssHostsV5#protect_charging_mode}.

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectStatus"></a>

```go
ProtectStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#protect_status DataOpentelekomcloudHssHostsV5#protect_status}.

---

##### `ProtectVersion`<sup>Optional</sup> <a name="ProtectVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectVersion"></a>

```go
ProtectVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#protect_version DataOpentelekomcloudHssHostsV5#protect_version}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_hosts_v5#status DataOpentelekomcloudHssHostsV5#status}.

---

### DataOpentelekomcloudHssHostsV5Hosts <a name="DataOpentelekomcloudHssHostsV5Hosts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

&dataopentelekomcloudhsshostsv5.DataOpentelekomcloudHssHostsV5Hosts {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssHostsV5HostsList <a name="DataOpentelekomcloudHssHostsV5HostsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

dataopentelekomcloudhsshostsv5.NewDataOpentelekomcloudHssHostsV5HostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudHssHostsV5HostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudHssHostsV5HostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudHssHostsV5HostsOutputReference <a name="DataOpentelekomcloudHssHostsV5HostsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudhsshostsv5"

dataopentelekomcloudhsshostsv5.NewDataOpentelekomcloudHssHostsV5HostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudHssHostsV5HostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.assetRiskNum">AssetRiskNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.assetValue">AssetValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.baselineRiskNum">BaselineRiskNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.detectResult">DetectResult</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.intrusionRiskNum">IntrusionRiskNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.policyGroupId">PolicyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectChargingMode">ProtectChargingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectVersion">ProtectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.vulnerabilityRiskNum">VulnerabilityRiskNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts">DataOpentelekomcloudHssHostsV5Hosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AssetRiskNum`<sup>Required</sup> <a name="AssetRiskNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.assetRiskNum"></a>

```go
func AssetRiskNum() *f64
```

- *Type:* *f64

---

##### `AssetValue`<sup>Required</sup> <a name="AssetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.assetValue"></a>

```go
func AssetValue() *string
```

- *Type:* *string

---

##### `BaselineRiskNum`<sup>Required</sup> <a name="BaselineRiskNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.baselineRiskNum"></a>

```go
func BaselineRiskNum() *f64
```

- *Type:* *f64

---

##### `DetectResult`<sup>Required</sup> <a name="DetectResult" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.detectResult"></a>

```go
func DetectResult() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntrusionRiskNum`<sup>Required</sup> <a name="IntrusionRiskNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.intrusionRiskNum"></a>

```go
func IntrusionRiskNum() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `PolicyGroupId`<sup>Required</sup> <a name="PolicyGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.policyGroupId"></a>

```go
func PolicyGroupId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `ProtectChargingMode`<sup>Required</sup> <a name="ProtectChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectChargingMode"></a>

```go
func ProtectChargingMode() *string
```

- *Type:* *string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectStatus"></a>

```go
func ProtectStatus() *string
```

- *Type:* *string

---

##### `ProtectVersion`<sup>Required</sup> <a name="ProtectVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectVersion"></a>

```go
func ProtectVersion() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `VulnerabilityRiskNum`<sup>Required</sup> <a name="VulnerabilityRiskNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.vulnerabilityRiskNum"></a>

```go
func VulnerabilityRiskNum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudHssHostsV5Hosts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts">DataOpentelekomcloudHssHostsV5Hosts</a>

---



